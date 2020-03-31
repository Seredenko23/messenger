import React, {Component} from 'react';
import './ThreadOut.scss'
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {logOut} from "../../../../../../redux/actions/login";
import {ThreadOutProps} from "./models/ThreadOut";

class ThreadOut extends Component<ThreadOutProps> {

  clickHandler = () => {
    this.props.logOut()
  };

  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div>
        <div className='thread-logout'>
          <div>{`${firstName} ${lastName}`}</div>
          <i className="fas fa-sign-out-alt cursor-pointer"
             onClick={this.clickHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadOut);
