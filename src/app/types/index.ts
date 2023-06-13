/**
 * 歌曲类型
 */
export interface AlType {
  id: number;
  name: string;
  picUrl: string;
}

/**
 * 歌手
 */
export interface ArType {
  id: number;
  name: string;
}

export type IdentifyType = {
  imageUrl: string;
  imageDesc: string;
  actionUrl: string;
};

export interface VideoStateType {
  //播放状态
  playing: boolean;
  // 音量进度条
  volume: number;
  //播放器音量
  playerVolume: number;
  //画质
  quality: boolean;
  //全屏
  fullScreen: boolean;
}

export interface VideoPlayedProgress {
  loaded: number;
  loadedSeconds:number;
  played: number;
  playedSeconds: number;
}
