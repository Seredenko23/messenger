import React, { Component } from 'react';
import './ChatInput.scss'
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { sendMessage } from "../../../../../../redux/actions/socket";
import { User } from "../../../../../../models/user";
import { Message } from "../../../../../../models/messages";
import MicRecorder from "mic-recorder-to-mp3"

interface Props {
  threadId: string;
  user: User;
  sendMessage: (message: Message) => void;
}

interface State {
  messageBody: string;
  isRecording: boolean,
  blobURL: string,
  isBlocked: boolean,
}

class ChatInput extends Component<Props, State> {
  Recorder = new MicRecorder({ bitRate: 128 });
  constructor(props) {
    super(props);
    this.state = {
      messageBody: '',
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    }
  }

  componentDidMount(): void {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  record = () => {
    if (this.state.isBlocked) console.log('Permission Denied');
    if(!this.state.isRecording) {
      this.Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    } else {
      this.Recorder.stop()
        .getMp3()
        .then(([buffer, blob]) => {
          console.log(blob);
          const blobURL = URL.createObjectURL(blob);
          this.setState({ blobURL, isRecording: false });
        })
        .catch((e) => console.log(e));
    }
  };

  handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      messageBody: event.currentTarget.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      threadId: this.props.threadId,
      user: this.props.user,
      messageBody: this.state.messageBody
    };
    this.props.sendMessage(message)
  };

  render() {
    return (
      <form className={'input-wrapper'} onSubmit={this.handleSubmit}>
        <textarea className={'message-input'}
                  placeholder={'Type something...'}
                  value={this.state.messageBody}
                  onChange={this.handleChange}
        />
        {
          this.state.messageBody ? (
            <button className={'chat-btn'}>
              =>
            </button>
          ) : (
            <button className={'chat-btn'}
                    type={'button'}
                    onClick={this.record}
            >
              M
            </button>
          )
        }
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    threadId: state.threadReducer.threadId,
    user: state.loginReducer.user
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: bindActionCreators(sendMessage, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
