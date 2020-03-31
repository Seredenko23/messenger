import React, {Component, PureComponent} from 'react';
import './Message.scss'
import {MessageBody} from "../../../../../../../../models/MessageBody";
import {b64toBlob, getYoutubeUrlId} from "../../../../../../../../service/utilities";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Youtube from "react-youtube"
import moment from 'moment'
import {youtubeOpt} from "../../../../../../../../config/config";
import LinkPreview from "../LinkPreview/LinkPreview";
import {MessageProps} from "./models/Message";
import Anime from "react-anime";

class Message extends PureComponent<MessageProps, any> {
  constructor(props) {
    super(props)
    this.state = { viewed: false }
  }

  createMessage = (messageBody: MessageBody) => {
    switch (messageBody.type) {
      case 'text':
        return (
          <p>{messageBody.body}</p>
        )
      case 'audio':
        let blob = b64toBlob(messageBody.body, 'audio/mp3')
        return (
          <AudioPlayer url={URL.createObjectURL(blob)}/>
        )
      case 'youtube':
        return (
          <Youtube
            videoId={getYoutubeUrlId(this.props.messageBody.body as string)}
            opts={youtubeOpt}
          />
        )
      case 'image':
        return (
          <a href={this.props.messageBody.body as string}>
            <img alt={this.props.messageBody.body as string}
                 src={this.props.messageBody.body as string}
                 width={500}
            />
          </a>
        )
      case 'url':
        return (
          <LinkPreview url={this.props.messageBody.body as string}
                       type={this.props.type as string}
          />
        )
    }
  };

  generateAnimation = () => {
    return {
      translateX: this.props.type === 'my' ? [300, 0] : [-300, 0],
      duration: 1200,
    }
  }

  render() {
    const animProps = this.generateAnimation();
    console.log(animProps)
    const renderedMessage = this.createMessage(this.props.messageBody);
    return (
      <Anime {...animProps}>
        <div className={`message-wrapper ${this.props.type}`}>
          <div className={'message'}>
            <p className={'name'}>
              { this.props.name }
            </p>
            { renderedMessage }
            <p className={'time'}>{moment(this.props.createdAt).format('MMMM Do, h:mm a')}</p>
          </div>
        </div>
      </Anime>
    );
  }
}

export default Message;
