export interface AudioPlayerProps {
  url: string;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  totalDuration: number;
  barSize: number;
}
