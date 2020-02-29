import React, {Component} from 'react';
import './ThreadOut.scss'
class ThreadOut extends Component {
    render() {
        return (
            <div>
                <div className='thread-logout'>
                    <div>Vernon George</div>
                    <i className="fas fa-sign-out-alt cursor-pointer"></i>
                </div>
            </div>
        );
    }
}

export default ThreadOut;