import React, {Component} from 'react';
import './Message.scss'
import {MessageBody} from "../../../../../../../../models/MessageBody";
import {b64toBlob} from "../../../../../../../../service/utilities";

interface Props {
  name: string;
  type?: string;
  messageBody: MessageBody
}

class Message extends Component<Props> {

  createMessage = (messageBody: MessageBody) => {
    switch (messageBody.type) {
      case 'text':
        return (
          <p>{messageBody.body}</p>
        )
      case 'audio':
        let blob = b64toBlob(messageBody.body, 'audio/mp3')
        return (
          <audio controls>
            <source src={URL.createObjectURL(blob)} type="audio/mp3"/>
          </audio>
        )
    }
  };

  render() {
    const renderedMessage = this.createMessage(this.props.messageBody);
    return (
      <div className={`message-wrapper ${this.props.type ? this.props.type : ''}`}>
        <div className={'message'}>
          <p className={'name'}>
            { this.props.name }
          </p>
          { renderedMessage }
        </div>
      </div>

    );
  }
}

export default Message;
