import React, {Component} from 'react';
import Chat from "./parts/Chat/Chat";
import './Messenger.scss'
import Thread from "./parts/Thread/Thread";
import {bindActionCreators, Dispatch} from "redux";
import {subscribeNewThread, unsubscribeNewThread} from "../../redux/actions/thread";
import {subscribeSearchableUser, unsubscribeSearchableUser} from "../../redux/actions/socket";
import {connect} from "react-redux";
import {MessengerProps} from "./parts/models/Messenger";

class Messenger extends Component<MessengerProps> {

  componentDidMount(): void {
    this.props.subscribeNewThread();
    this.props.subscribeSearchableUser();
  }

  componentWillUnmount(): void {
    this.props.unsubscribeNewThread();
    this.props.unsubscribeSearchableUser();
  }

  render() {
    return (
      <div className={'messenger-wrapper'}>
        <Thread />
        <Chat />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    subscribeSearchableUser: bindActionCreators(subscribeSearchableUser, dispatch),
    subscribeNewThread: bindActionCreators(subscribeNewThread, dispatch),
    unsubscribeNewThread: bindActionCreators(unsubscribeNewThread,dispatch),
    unsubscribeSearchableUser: bindActionCreators(unsubscribeSearchableUser ,dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
