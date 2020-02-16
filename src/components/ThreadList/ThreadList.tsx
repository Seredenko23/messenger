import React, {Component} from 'react';
import './ThreadList.scss'
class ThreadList extends Component {
    render() {
        return (
            <div>
                <div className='thread-search'>
                    <i className="fas fa-search thread-search-icon"></i>
                    <input type="text" className='input-search' placeholder='Seacrh'/>
                    <i className="fas fa-plus thread-search-icon"></i>
                </div>
            </div>
        );
    }
}

export default ThreadList;