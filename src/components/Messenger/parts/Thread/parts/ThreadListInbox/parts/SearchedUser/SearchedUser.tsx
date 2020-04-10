import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addThreadSocket, createNewThread, getThreads} from "../../../../../../../../redux/actions/thread";
import './SearchedUser.scss'
import { setIsEmpty } from "../../../../../../../../redux/actions/socket";
import {SearchedUserProps} from "./models/SearchedUser";

class SearchedUser extends Component<SearchedUserProps> {
  clickHandler = async () => {
    await this.props.addThreadSocket(this.props.searchedUser._id, this.props.user._id)
    await this.props.setIsEmpty(true)
    //this.props.getThreads(this.props.user._id)
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
    getThreads: bindActionCreators(getThreads, dispatch),
    addThreadSocket: bindActionCreators(addThreadSocket, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedUser);
