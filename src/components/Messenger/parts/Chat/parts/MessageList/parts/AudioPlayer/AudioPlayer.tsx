import React, {Component} from 'react';
import './AudioPlayer.scss'
import {calculateTime} from "../../../../../../../../service/utilities";
import {AudioPlayerProps, AudioPlayerState} from "./models/AudioPlayer";

class AudioPlayer extends Component<AudioPlayerProps, AudioPlayerState> {
  private audio: React.RefObject<HTMLAudioElement> = React.createRef<HTMLAudioElement>();
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      totalDuration: 0,
      barSize: 0,
    };
  }

  clickHandler = () => {
    if(this.audio.current) this.audio.current.play()
  };

  handleLoadData = (event) => {
    console.log(event.currentTarget)
    this.setState({
      totalDuration: event.currentTarget.duration
    })
  }

  handleUpdateTime = () => {
    const node: HTMLAudioElement = this.audio.current as HTMLAudioElement;
    if(node) {
      const percent = calculateTime(this.state.totalDuration, node.currentTime)
      this.setState({
        barSize: percent,
      })
    }
  }

  render() {
    return (
      <div className={'audio-wrapper'}>
        <button className={'play'}
                onClick={this.clickHandler}
        >
          {this.state.isPlaying ? 'Stop' : 'Play'}
        </button>
        <audio src={this.props.url}
               ref={this.audio}
               onLoadedData={this.handleLoadData}
               onTimeUpdate={this.handleUpdateTime}
        />
        <div className={'bar-wrapper'}>
          <div className={'bar full-bar'}/>
          <div style={{transform: `translate(-${100 - this.state.barSize}%)`}}
               className={'bar current-bar'}
          />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
