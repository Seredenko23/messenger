import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getThreads} from "../../redux/actions/thread";
import {connect} from "react-redux";
import ThreadUser from "../ThreadUser/ThreadUser";

class ThreadListInbox extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            threads: []
        }
    }

    updateProjects = () => {
        this.props.getThreads(this.props.user._id)
            .then((response) => {
                this.setState({
                    threads: response,
                })
            })
    };

    componentDidMount(): void {
        this.updateProjects()
    }

    render() {
        return (
            <div>
                {
                    this.state.threads.map(thread => {
                        return(
                            <ThreadUser thread={thread} key={thread._id}/>
                        )
                    })
                }
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
        getThreads : bindActionCreators(getThreads, dispatch),
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(ThreadListInbox);