import React, {Component} from 'react';
import './ThreadUser.scss'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getAllMessage} from "../../redux/actions/socket";
class ThreadUser extends Component<any,any> {
    render() {
        let {thread} = this.props;
        return (
            <div>
                <div className='thread-user__wrapper' onClick={()=>{
                    this.props.getAllMessage(thread._id)
                }}>
                    <div className='thread-user'>
                        <img src={"user.png"} alt="" width='80px' height='80px' className='user-img'/>
                        <div className='thread-user__name-message'>
                            <div className='thread-user__name'>
                                Herbest Ferguson
                            </div>
                            <div className='thread-user__message'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
        user: state.loginReducer.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMessage : bindActionCreators(getAllMessage, dispatch),
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(ThreadUser);

