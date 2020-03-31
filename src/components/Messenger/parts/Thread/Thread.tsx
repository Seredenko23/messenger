import React, {Component} from 'react';
import './Thread.scss'
import ThreadList from "./parts/ThreadList/ThreadList";
import ThreadOut from "./parts/ThreadOut/ThreadOut";
import ThreadListInbox from "./parts/ThreadListInbox/ThreadListInbox";

class Thread extends Component<any,any> {
    render() {
        return (
            <div className='thread'>
                <ThreadList/>
                <div className='thread-user-message__list'>
                  <ThreadListInbox/>
                </div>
                <ThreadOut/>
            </div>
        );
    }
}

export default Thread;
