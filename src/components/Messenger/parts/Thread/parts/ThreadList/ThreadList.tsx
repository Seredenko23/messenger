import React, {Component} from 'react';
import './ThreadList.scss'
import {bindActionCreators, Dispatch} from "redux";
import {clearSearchableUser, getSearchableUser, subscribeSearchableUser, setIsEmpty} from "../../../../../../redux/actions/socket";
import {connect} from "react-redux";
import {ThreadListProps, ThreadListState} from "./models/ThreadList";

class ThreadList extends Component<ThreadListProps, ThreadListState> {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  componentDidMount(): void {
    this.props.subscribeSearchableUser()
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      search: event.currentTarget.value
    }, () => {
      console.log(this.state)
      if(this.state.search) {
        this.props.setIsEmpty(false)
        this.props.getSearchableUser(this.state.search)
      } else {
        this.props.setIsEmpty(true)
      }
    });
  };

  render() {
    return (
      <div>
        <div className='thread-search'>
          <i className="fas fa-search thread-search-icon"/>
          <input type="text"
                 className='input-search'
                 placeholder='Seacrh'
                 value={this.state.search}
                 onChange={this.handleChange}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    subscribeSearchableUser: bindActionCreators(subscribeSearchableUser, dispatch),
    getSearchableUser: bindActionCreators(getSearchableUser, dispatch),
    clearSearchableUser: bindActionCreators(clearSearchableUser, dispatch),
    setIsEmpty: bindActionCreators(setIsEmpty, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ThreadList);
