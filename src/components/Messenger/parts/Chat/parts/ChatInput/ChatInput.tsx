import React, {Component} from 'react';
import './ChatInput.scss'

class ChatInput extends Component {
  render() {
    return (
      <div className={'input-wrapper'}>
        <textarea className={'message-input'}
               placeholder={'Type something...'}/>
        <button className={'chat-btn'}>
          =>
        </button>
      </div>
    );
  }
}

export default ChatInput;
