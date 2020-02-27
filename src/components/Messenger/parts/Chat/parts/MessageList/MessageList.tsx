import React, {Component} from 'react';
import './MessageList.scss';
import Message from "./parts/Message/Message";
import { Message as MessageType}  from "../../../../../../models/messages"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getAllMessage, subscribeMessage} from "../../../../../../redux/actions/socket";

interface Props {
  threadId: string;
  messages: MessageType[];
  getAllMessage: (threadId: string) => void;
  subscribeMessage: () => void;
}

class MessageList extends Component<Props> {

  constructor(props) {
    super(props)
  }

  componentDidMount(): void {
    this.props.subscribeMessage();
    this.props.getAllMessage(this.props.threadId)
  }

  render() {
    return (
      <div className={'message-list'}>
        { this.props.messages.map((message: MessageType) => {
          return (
            <Message key={message._id}>
              {message.messageBody}
            </Message>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.Socket.messages,
    threadId: state.threadReducer.threadId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMessage: bindActionCreators(getAllMessage, dispatch),
    subscribeMessage: bindActionCreators(subscribeMessage, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
