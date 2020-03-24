import React, {Component} from 'react';
import {User} from "../../../../../../models/user";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createNewThread, getThreads} from "../../../../../../redux/actions/thread";
import './SearchedUser.scss'
import { setIsEmpty } from "../../../../../../redux/actions/socket";

interface Props {
  createNewThread: (currentUser: string, user:string) => void;
  searchedUser: User;
  setIsEmpty: (isEmpty: boolean) => void;
  user: User;
  getThreads: (userId: string) => void
}

class SearchedUser extends Component<Props> {
  clickHandler = () => {
    this.props.createNewThread(this.props.searchedUser._id, this.props.user._id)
    this.props.setIsEmpty(true)
    this.props.getThreads(this.props.user._id)
  }

  render() {
    return (
      <div className={'searched-user'}
           onClick={this.clickHandler}>
        <p className={'searched-user-name'}>
          {`${this.props.searchedUser.firstName} ${this.props.searchedUser.lastName}`}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewThread: bindActionCreators(createNewThread, dispatch),
    setIsEmpty: bindActionCreators(setIsEmpty, dispatch),
    getThreads: bindActionCreators(getThreads, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedUser);
