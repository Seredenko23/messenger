import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {sendMessage, setIsTyping} from "../../../../../../redux/actions/socket";
import { Message } from "../../../../../../models/messages";
import MicRecorder from "mic-recorder-to-mp3"
import {getType} from "../../../../../../service/utilities";
import './ChatInput.scss'
import {ChatInputProps, ChatInputState} from "./models/ChatInput";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrophone, faArrowRight, faFileImage} from "@fortawesome/free-solid-svg-icons";

class ChatInput extends Component<ChatInputProps, ChatInputState> {
  Recorder: MicRecorder = new MicRecorder({ bitRate: 128 });
  timer: number | undefined;
  private fileInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      messageBody: '',
      isRecording: false,
      isBlocked: false,
      file: null,
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

  record = (): void => {
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
            threadId: this.props.currentThread._id,
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

  handleOnKeyDown = (): void => {
    this.props.setIsTyping(true);
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.props.setIsTyping(false)
    }, 3000)
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if(this.timer) {
      clearTimeout(this.timer)
      this.props.setIsTyping(false)
    }
    const message: Message = {
      threadId: this.props.currentThread._id,
      user: this.props.user._id,
      messageBody: {
        body: this.state.messageBody,
        type: getType(this.state.messageBody)
      }
    };
    this.props.sendMessage(message)
  };

  handleOnFileChange = (e) => {
    let file = e.target.files[0];
    console.log(file);
    this.setState({
      file: file
    })
  }

  clearFile = () => {
    this.setState({
      file: null
    })
  }

  render() {
    return (
      <form className={'input-wrapper'} onSubmit={this.handleSubmit}>
        <label className={'file-input-label'} >
          <FontAwesomeIcon icon={faFileImage}/>
          <input type={'file'}
                 className={'file-input'}
                 name={'file'}
                 ref={this.fileInput}
                 onChange={this.handleOnFileChange}
          />
        </label>
        {
          this.state.file ? (
            <div className={'file'}>
              {this.state.file.name}
              <div className={'clear-file'}
                   onClick={this.clearFile}
              >
                X
              </div>
            </div>
          ) : (
            <textarea className={'message-input'}
                      placeholder={'Type something...'}
                      value={this.state.messageBody}
                      onChange={this.handleChange}
                      onKeyDown={this.handleOnKeyDown}
            />
          )
        }
        {
          this.state.messageBody ? (
            <button className={'chat-btn'}>
               <FontAwesomeIcon icon={faArrowRight}/>
            </button>
          ) : (
            <button className={`chat-btn ${this.state.isRecording ? 'active' : 'unactive'}`}
                    type={'button'}
                    onClick={this.record}
            >
              <FontAwesomeIcon icon={faMicrophone}/>
            </button>
          )
        }
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentThread: state.threadReducer.currentThread,
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
