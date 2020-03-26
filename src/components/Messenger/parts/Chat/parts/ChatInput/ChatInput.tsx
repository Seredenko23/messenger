import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {sendMessage, setIsTyping} from "../../../../../../redux/actions/socket";
import { Message } from "../../../../../../models/messages";
import MicRecorder from "mic-recorder-to-mp3"
import {getType} from "../../../../../../service/utilities";
import './ChatInput.scss'
import {ChatInputProps, ChatInputState} from "./models/ChatInput";

class ChatInput extends Component<ChatInputProps, ChatInputState> {
  Recorder = new MicRecorder({ bitRate: 128 });
  timer: number | undefined;
  constructor(props) {
    super(props);
    this.state = {
      messageBody: '',
      isRecording: false,
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
        .catch((e: Error) => console.error(e));
    } else {
      this.Recorder.stop()
        .getMp3()
        .then(async ([buffer ,blob]) => {
          const message: Message = {
            threadId: this.props.threadId,
            user: this.props.user._id,
            messageBody: {
              body: blob,
              type: 'audio'
            }
          };
          this.props.sendMessage(message);
          this.setState({ isRecording: false });
        })
        .catch((e: Error) => console.log(e));
    }
  };

  handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    this.setState({
      messageBody: event.currentTarget.value
    })
  };

  handleOnKeyDown = () => {
    this.props.setIsTyping(true);
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.props.setIsTyping(false)
    }, 3000)
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(this.timer) {
      clearTimeout(this.timer)
      this.props.setIsTyping(false)
    }
    const message: Message = {
      threadId: this.props.threadId,
      user: this.props.user._id,
      messageBody: {
        body: this.state.messageBody,
        type: getType(this.state.messageBody)
      }
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
                  onKeyDown={this.handleOnKeyDown}
        />
        {
          this.state.messageBody ? (
            <button className={'chat-btn'}>
              =>
            </button>
          ) : (
            <button className={`chat-btn ${this.state.isRecording ? 'active' : 'unactive'}`}
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
    user: state.userReducer.user,
    isTyping: state.Socket.isTyping
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: bindActionCreators(sendMessage, dispatch),
    setIsTyping: bindActionCreators(setIsTyping, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
