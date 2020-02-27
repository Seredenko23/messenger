import React, {Component} from 'react';
import Chat from "./parts/Chat/Chat";
import './Messenger.scss'

class Messenger extends Component {

  render() {
    return (
      <div className={'messenger-wrapper'}>
      {/* Здесь будут треды и чат*/}
      <Chat />
      </div>
    );
  }
}

export default Messenger;
