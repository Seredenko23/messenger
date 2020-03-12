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
                                {
                                    this.props.user._id === thread.users[0]._id ?
                                        thread.users[1].firstName + thread.users[1].lastName : thread.users[0].firstName + thread.users[0].lastName
                                }
                            </div>
                            <div className='thread-user__message'>
                                {!!thread.message ? thread.message.body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur libero officiis possimus, ratione sed ut vero. Adipisci aperiam asperiores at consequuntur dicta doloremque et id illum inventore ipsa iste laudantium maxime molestiae, mollitia nam natus nesciunt nobis omnis, perferendis provident quaerat quas quasi quia quisquam reiciendis suscipit tempora, tempore.'}
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

