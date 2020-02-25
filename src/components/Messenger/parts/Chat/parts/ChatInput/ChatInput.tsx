import React, {ChangeEvent, Component} from 'react';
import './ChatInput.scss'
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { sendMessage } from "../../../../../../redux/actions/socket";
import { User } from "../../../../../../models/user";
import { Message } from "../../../../../../models/messages";

interface Props {
  threadId: string;
  user: User;
  sendMessage: (message: Message) => void;
}

interface State {
  messageBody: string;
}

class ChatInput extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      messageBody: ''
    }
  }

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
        <button className={'chat-btn'}>
          =>
        </button>
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
