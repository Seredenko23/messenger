import React, {Component} from 'react';
import './ChatInfo.scss'
import {connect} from "react-redux";
import {ChatInfoProps} from "./models/ChatInfo";


class ChatInfo extends Component<ChatInfoProps> {
  generateFullName = () => {
    let fullName: string;
    if(this.props.currentThread.users) {
      fullName = this.props.user._id === this.props.currentThread.users[0]._id ?
        `${this.props.currentThread.users[1].firstName} ${this.props.currentThread.users[1].lastName}`
        : `${this.props.currentThread.users[0].firstName} ${this.props.currentThread.users[0].lastName}`;
    } else {
      fullName = '';
    }
    return fullName
  }
  render() {
    return (
      <div className={'chat-info'}>
        <span className={'user'}>{this.generateFullName()}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   currentThread: state.threadReducer.currentThread,
   user: state.userReducer.user
 }
}

export default connect(mapStateToProps)(ChatInfo);
