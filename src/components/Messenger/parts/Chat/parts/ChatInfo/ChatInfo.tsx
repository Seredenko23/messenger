import React, {Component, PureComponent} from 'react';
import './ChatInfo.scss'
import {connect} from "react-redux";
import {ChatInfoProps} from "./models/ChatInfo";
import ThreadList from "../../../Thread/parts/ThreadList/ThreadList";
import ThreadListInbox from "../../../Thread/parts/ThreadListInbox/ThreadListInbox";
import ThreadOut from "../../../Thread/parts/ThreadOut/ThreadOut";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import Anime from "react-anime";
import {HashLoader} from "react-spinners";

export interface Modal {
  isOpen: boolean;
  mounted: boolean;
}

class ChatInfo extends PureComponent<ChatInfoProps,Modal> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      mounted: false,
    }
  }

  componentDidMount(): void {
    console.log(this.state.mounted, 'asd')
    this.setState({mounted: true})
    console.log(this.state.mounted,'fqwe')

  }

  generateFullName = (): string => {
    let fullName: string;
    if(this.props.currentThread.users) {
      fullName = this.props.user._id === this.props.currentThread.users[0]._id ?
        `${this.props.currentThread.users[1].firstName} ${this.props.currentThread.users[1].lastName}`
        : `${this.props.currentThread.users[0].firstName} ${this.props.currentThread.users[0].lastName}`;
    } else {
      fullName = ''
    }
    return fullName
  };

  generateAnimation = () => {
    if(!this.state.mounted) {
      return {}
    } else if(!this.state.isOpen) {
      return {
        translateX: [0, 320],
        duration: 500,
        easing: "easeOutQuad"
      }
    } else {
      return {
        translateX: [-320, 0],
        duration: 500,
        easing: "easeOutQuad"
      }
    }
  }

  render() {
    const animProps = this.generateAnimation()
    return (
      <div>
        <Anime {...animProps} className={'mobile-thread'}>
          <div className='thread-open'>
            <ThreadList>
              <FontAwesomeIcon icon={faTimes} className={'cancel'}
                       onClick={() => this.setState({isOpen:!this.state.isOpen})}
              />
            </ThreadList>
            <div className='thread-user-message__list'>
              <ThreadListInbox/>
            </div>
            <ThreadOut/>
          </div>
        </Anime>
          <div className={'chat-info'}>
            <FontAwesomeIcon icon={faBars}  className="burger"
               onClick={() => this.setState({isOpen:!this.state.isOpen})}
            />
            <span className={'user'}>{this.generateFullName()}</span>
            <HashLoader
              size={30}
              color={'#ffffff'}
              loading={this.props.isPending}
              />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   isPending: state.Socket.allMessageIsPending,
   currentThread: state.threadReducer.currentThread,
   user: state.userReducer.user
 }
}

export default connect(mapStateToProps)(ChatInfo);
