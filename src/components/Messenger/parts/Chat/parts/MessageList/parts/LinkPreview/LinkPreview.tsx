import React, {Component} from 'react';
import {extractMetadataFromUrl} from "../../../../../../../../service/metadata";
import './LinkPreview.scss'
import {LinkPreviewProps, LinkPreviewState} from "./models/LinkPreview";

class LinkPreview extends Component<LinkPreviewProps, LinkPreviewState> {

  constructor(props) {
    super(props);
    this.state = {
      imgURL: '',
      title: '',
      host: '',
    }
  }

  componentDidMount(): void {
    extractMetadataFromUrl(this.props.url)
      .then(res => {
        this.setState({
          imgURL: res.imgURL,
          title: res.title,
          host: res.host,
        })
      })
  }

  clickHandler = () => {
    window.open(this.props.url);
  }

  render() {
    return (
      <div className={`link-preview-wrapper ${this.props.type}`}
           onClick={this.clickHandler}
      >
        {this.state.imgURL ? (<img alt={this.state.imgURL}
             src={this.state.imgURL}
             width={100}
             height={100}
        />) : (
          <div className={'letter'}>
            {this.state.title[0]}
          </div>
        )}
        <div className={'link-preview-text'}>
          <p>{this.state.title}</p>
          <a href={this.props.url}
             target="_blank"
             className={'fake-link'}>
            {this.state.host}
          </a>
        </div>
      </div>
    );
  }
}

export default LinkPreview;
