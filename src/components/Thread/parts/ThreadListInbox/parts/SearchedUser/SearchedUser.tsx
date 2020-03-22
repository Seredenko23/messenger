import React, {Component} from 'react';
import {User} from "../../../../../../models/user";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createNewThread} from "../../../../../../redux/actions/thread";
import './SearchedUser.scss'

interface Props {
  createNewThread: (currentUser: string, user:string) => void
  searchedUser: User;
  user: User;
}

class SearchedUser extends Component<Props> {
  clickHandler = () => {
    this.props.createNewThread(this.props.searchedUser._id, this.props.user._id)
  }

  render() {
    return (
      <div className={'searched-user'}
           onClick={this.clickHandler}>
        <p className={'searched-user-name'}>{`${this.props.searchedUser.firstName} ${this.props.searchedUser.lastName}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewThread: bindActionCreators(createNewThread, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedUser);
