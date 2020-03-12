import React, {Component} from 'react';
import './ThreadUser.scss'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getAllMessage} from "../../../../../../redux/actions/socket";

class ThreadUser extends Component<any,any> {

    updateMessage = () => {
        this.props.getAllMessage(this.props.thread._id)
    }

    render() {
        let {thread} = this.props;
        return (
            <div>
                <div className='thread-user__wrapper' onClick={this.updateMessage}>
                    <div className='thread-user'>
                        <img src={"user.png"} alt="" width='80px' height='80px' className='user-img'/>
                        <div className='thread-user__name-message'>
                            <div className='thread-user__name'>
                                {
                                    this.props.user._id === thread.users[0]._id ?
                                        thread.users[1].firstName + thread.users[1].lastName
                                        : thread.users[0].firstName + thread.users[0].lastName
                                }
                            </div>
                            <div className='thread-user__message'>
                                {"PLACEHOLDER"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMessage : bindActionCreators(getAllMessage, dispatch),
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(ThreadUser);

