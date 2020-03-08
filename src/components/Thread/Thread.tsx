import React, {Component} from 'react';
import './Thread.scss'
import ThreadList from "../ThreadList/ThreadList";
import ThreadUser from "../ThreadUser/ThreadUser";
import ThreadOut from "../ThreadOut/ThreadOut";

class Thread extends Component {
    render() {
        return (
            <div className='thread'>
                <ThreadList/>
                <div className='thread-user-message__list'>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                    <ThreadUser/>
                </div>
             <ThreadOut/>
            </div>
        );
    }
}

export default Thread;
