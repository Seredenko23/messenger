import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {DownloadLinkProps} from "./models/DownloadLink";
import './DownloadLink.scss'

class DownloadLink extends Component<DownloadLinkProps> {
  render() {
    return (
      <div className={'download-link-wrapper'}>
        <a href={this.props.href} download={true} className={'download-link'}>
          <FontAwesomeIcon icon={faDownload} className={'download-icon'}/>
          {this.props.file.name}
        </a>
      </div>
    );
  }
}

export default DownloadLink;
