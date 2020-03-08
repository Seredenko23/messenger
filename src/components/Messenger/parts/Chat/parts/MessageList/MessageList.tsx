import React, {Component} from 'react';
import './MessageList.scss';
import Message from "./parts/Message/Message";
import { Message as MessageType}  from "../../../../../../models/messages"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAllMessage, subscribeMessage} from "../../../../../../redux/actions/socket"
import {User} from "../../../../../../models/user";

interface Props {
  threadId: string;
  messages: MessageType[];
  getAllMessage: (threadId: string) => void;
  subscribeMessage: () => void;
  user: User;
}

class MessageList extends Component<Props> {

  componentDidMount(): void {
    this.props.subscribeMessage();
    this.props.getAllMessage(this.props.threadId)
  }

  render() {
    const { user, messages } = this.props
    return (
      <div className={'message-list'}>
        { messages.map((message: MessageType) => {
          console.log(message.createdAt)
          let type = user._id === message.user._id ? 'my' : '';
          let fullName = `${message.user.firstName} ${message.user.lastName}`;
          return (
            <Message key={message._id}
                     type={type}
                     name={fullName}
                     messageBody={message.messageBody}
                     createdAt={message.createdAt as string}
            />
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.Socket.messages,
    threadId: state.threadReducer.threadId,
    user: state.userReducer.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMessage: bindActionCreators(getAllMessage, dispatch),
    subscribeMessage: bindActionCreators(subscribeMessage, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
