import React, {Component} from 'react';
import Chat from "./parts/Chat/Chat";
import './Messenger.scss'
import Thread from "../Thread/Thread";

class Messenger extends Component {

  render() {
    return (
      <div className={'messenger-wrapper'}>
        <Thread />
        <Chat />
      </div>
    );
  }
}

export default Messenger;
