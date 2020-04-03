import React, {Component, PureComponent} from 'react';
import './Message.scss'
import {MessageBody} from "../../../../../../../../models/MessageBody";
import {b64toBlob, FileReq, getYoutubeUrlId} from "../../../../../../../../service/utilities";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Youtube from "react-youtube"
import moment from 'moment'
import {youtubeOpt} from "../../../../../../../../config/config";
import LinkPreview from "../LinkPreview/LinkPreview";
import {MessageProps} from "./models/Message";
import Anime from "react-anime";
import DownloadLink from "../DownloadLink/DownloadLink";

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
            videoId={getYoutubeUrlId(messageBody.body as string)}
            opts={youtubeOpt}
          />
        )
      case 'image':
        return (
          <a href={messageBody.body as string}>
            <img className={'message-img'}
                 alt={messageBody.body as string}
                 src={messageBody.body as string}
                 width={500}
            />
          </a>
        )
      case 'url':
        return (
          <LinkPreview url={messageBody.body as string}
                       type={this.props.type as string}
          />
        )
      case 'file':
        console.log(messageBody.body)
        let file = b64toBlob((messageBody.body as FileReq).file, (messageBody.body as FileReq).type)
        return (
          <DownloadLink href={URL.createObjectURL(file)} file={this.props.messageBody.body as FileReq}/>
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
