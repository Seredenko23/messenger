import React, {Component} from 'react';
import './MessageList.scss';
import Message from "./parts/Message/Message";
import { Message as MessageType}  from "../../../../../../models/messages"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { subscribeIsTyping, subscribeMessage} from "../../../../../../redux/actions/socket"
import {User} from "../../../../../../models/user";
import {MessageListProps} from "./models/MessageList";

class MessageList extends Component<MessageListProps> {
  private readonly anchor: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props)
    this.anchor = React.createRef()
  }

  componentDidMount(): void {
    this.props.subscribeMessage();
    this.props.subscribeIsTyping();
  }

  componentDidUpdate(): void {
    this.scrollToBottom()
  }

  scrollToBottom = (): void => {
    this.anchor.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
  }

  render() {
    const { user, messages, isTyping } = this.props
    return (
      <div className={'message-list'}>
        { messages.map((message: MessageType) => {
          let type = user._id === (message.user as User)._id ? 'my' : '';
          let fullName = `${(message.user as User).firstName} ${(message.user as User).lastName}`;
          return (
            <Message key={message._id}
                     type={type}
                     name={fullName}
                     messageBody={message.messageBody}
                     createdAt={message.createdAt as string}
            />
          )
        })}
        <p className={'user-typing'}>{isTyping ? `${user.firstName} is typing...` : ''}</p>
        <div className={'anchor'} ref={this.anchor} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.Socket.messages,
    user: state.userReducer.user,
    isTyping: state.Socket.isTyping
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeMessage: bindActionCreators(subscribeMessage, dispatch),
    subscribeIsTyping: bindActionCreators(subscribeIsTyping, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
