import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getThreads} from "../../../../redux/actions/thread";
import {connect} from "react-redux";
import ThreadUser from "./parts/ThreadUser/ThreadUser";
import {User} from "../../../../models/user";
import {Thread} from "../../../../models/Thread";
import {subscribeSearchableUser} from "../../../../redux/actions/socket";
import SearchedUser from "./parts/SearchedUser/SearchedUser";

interface Props {
  subscribeSearchableUser: () => void;
  getThreads: (string) => void;
  user: User;
  threads: Thread[];
  searchableUsers: User[];
  isEmpty: boolean;
}

class ThreadListInbox extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.props.subscribeSearchableUser()
    this.props.getThreads(this.props.user._id)
  }

  renderList = () => {
    let list: any;
    if(this.props.isEmpty) {
      list = this.props.threads.map(thread => <ThreadUser thread={thread} key={thread._id}/>)
    } else {
      list = this.props.searchableUsers.map(user => <SearchedUser searchedUser={user} key={user._id}/>)
    }
    return list
  }

  render() {
    return (
      <div>
        { this.renderList() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    threads: state.threadReducer.threads,
    searchableUsers: state.Socket.searchableUsers,
    isEmpty: state.Socket.isEmpty,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getThreads: bindActionCreators(getThreads, dispatch),
    subscribeSearchableUser: bindActionCreators(subscribeSearchableUser, dispatch)
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ThreadListInbox);
