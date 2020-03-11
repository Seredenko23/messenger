import React, {Component} from 'react';
import {extractMetadataFromUrl} from "../../../../../../../../service/metadata";
import './LinkPreview.scss'

interface Props {
  url: string
}

interface State {
  imgURL: string;
  title: string;
  host: string;
}

class LinkPreview extends Component<Props, State> {

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

  render() {
    return (
      <div className={'link-preview-wrapper'}>
        <img alt={this.state.imgURL}
             src={this.state.imgURL}
             width={100}
             height={100}
        />
        <div className={'link-preview-text'}>
          <p>{this.state.title}</p>
          <a href={this.props.url}>{this.state.host}</a>
        </div>
      </div>
    );
  }
}

export default LinkPreview;
