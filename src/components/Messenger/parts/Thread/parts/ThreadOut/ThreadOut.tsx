import React, {Component} from 'react';
import './ThreadOut.scss'
import {connect} from "react-redux";
import {User} from "../../../../../../models/user";
import {bindActionCreators, Dispatch} from "redux";
import {logOut} from "../../../../../../redux/actions/login";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

interface Props {
  user: User;
  logOut: () => void;
}

class ThreadOut extends Component<Props> {

  clickHandler = () => {
    this.props.logOut()
  };

  render() {
    const {firstName, lastName} = this.props.user;
    return (
      <div>
        <div className='thread-logout'>
          <div>{`${firstName} ${lastName}`}</div>
          <FontAwesomeIcon icon={faSignOutAlt} className="cursor-pointer"
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
