import React, {Component} from 'react';
import './Message.scss'

interface Props {
  name: string;
  type?: string;
}

class Message extends Component<Props> {
  render() {
    return (
      <div className={`message-wrapper ${this.props.type ? this.props.type : ''}`}>
        <div className={'message'}>
          <p className={'name'}>{ this.props.name }</p>
          { this.props.children }
        </div>
      </div>

    );
  }
}

export default Message;
