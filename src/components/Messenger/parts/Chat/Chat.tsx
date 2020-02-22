import React, {Component} from 'react';
import './Chat.scss'
import ChatInput from "./parts/ChatInput/ChatInput";
import ChatInfo from "./parts/ChatInfo/ChatInfo";
import MessageList from "./parts/MessageList/MessageList";

class Chat extends Component {
  render() {
    return (
      <div className={'chat'}>
        <ChatInfo/>
        <MessageList/>
        <ChatInput/>
      </div>
    );
  }
}

export default Chat;
