import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getThreads} from "../../../../redux/actions/thread";
import {connect} from "react-redux";
import ThreadUser from "./parts/ThreadUser/ThreadUser";

class ThreadListInbox extends Component<any,any> {
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        console.log(this.props.user)
        this.props.getThreads(this.props.user._id)
    }

    render() {
        return (
            <div>
                {
                    this.props.threads.map(thread => {
                        return (
                            <ThreadUser thread={thread}
                                        key={thread._id}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        threads: state.threadReducer.threads
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getThreads : bindActionCreators(getThreads, dispatch),
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(ThreadListInbox);
