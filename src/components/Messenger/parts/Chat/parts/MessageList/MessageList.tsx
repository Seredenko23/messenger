import React, {Component} from 'react';
import './MessageList.scss';
import Message from "./parts/Message/Message";

class MessageList extends Component {
  render() {
    return (
      <div className={'message-list'}>
        <Message/>
      </div>
    );
  }
}

export default MessageList;
