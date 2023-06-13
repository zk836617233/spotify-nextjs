"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";
import ReactSlider from "react-slider";
import { divide, multiply, floor } from "lodash";
import { VideoPlayedProgress, VideoStateType } from "@/app/types";
import { formatTime } from "@/hooks/useFormatTime";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps {
  url?: string | string[] | undefined;
}
dayjs.extend(duration);
const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [videoState, setVideoState] = useState<VideoStateType>({
    playing: false,
    volume: 50,
    playerVolume: 0.5,
    quality: false,
    fullScreen: false,
  });

  const [videoTime, setVideoTime] = useState({
    start: "00:00",
    end: "00:00",
  });

  const [videoPlayed, setVideoPlayed] = useState(0);

  const videoRefs = useRef(null);

  //   const videoRefs = (e) => {
  //     console.log(e);
  //   };
  useEffect(()=>{
    console.log(videoRefs);
    
  },[])

  const handleVolume = (status: boolean) => {
    if (status) {
      setVideoState({
        ...videoState,
        volume: 50,
        playerVolume: 0.5,
      });
    } else {
      setVideoState({
        ...videoState,
        volume: 0,
        playerVolume: 0,
      });
    }
  };

  const handleSlider = (pos: number) => {
    if (pos === 0) {
      handleVolume(false);
    } else {
      setVideoState({
        ...videoState,
        volume: pos,
        playerVolume: divide(pos, 100),
      });
    }
  };

  const onDuration = async (time: number) => {
    setVideoTime({
      ...videoTime,
      end: await formatTime(time),
    });
  };

  const handleVideoSlider = (e) => {
    console.log(e);
  };

  const onProgress = (props: VideoPlayedProgress) => {
    setVideoTime({
      ...videoTime,
      start: dayjs
        .duration(floor(props.playedSeconds), "second")
        .format("mm:ss"),
    });
    setVideoPlayed(multiply(props.played, 100));
  };

  return (
    <div className="relative w-[1140px] h-[477px]">
      <div className="absolute bottom-12 left-0 w-full cursor-pointer z-10">
        <ReactSlider
          className="player-horizontal-slider"
          thumbClassName="player-example-thumb"
          trackClassName="player-example-track"
          thumbActiveClassName="thumb-active"
          onAfterChange={handleVideoSlider}
          value={videoPlayed}
        />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full h-12 flex items-center justify-between px-5">
        <div className="flex gap-4 items-center">
          <div className="hover:opacity-50 cursor-pointer transition duration-200">
            {videoState.playing ? (
              <FaPause
                size={22}
                onClick={() =>
                  setVideoState({ ...videoState, playing: !videoState.playing })
                }
              />
            ) : (
              <FaPlay
                size={22}
                onClick={() =>
                  setVideoState({ ...videoState, playing: !videoState.playing })
                }
              />
            )}
          </div>
          <div className="hover:opacity-50 cursor-pointer transition duration-200">
            {videoState.volume !== 0 ? (
              <FaVolumeUp size={22} onClick={() => handleVolume(false)} />
            ) : (
              <FaVolumeMute size={22} onClick={() => handleVolume(true)} />
            )}
          </div>
          <div className="w-[90px]">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              thumbActiveClassName="thumb-active"
              onAfterChange={handleSlider}
              value={videoState.volume}
            />
          </div>
          <div>
            {videoTime.start} / {videoTime.end}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="hover:opacity-50 cursor-pointer transition duration-200">
            <MdHighQuality size={22} />
          </div>
          <div className="hover:opacity-50 cursor-pointer transition duration-200">
            {videoState.fullScreen ? (
              <BsFullscreenExit size={22} />
            ) : (
              <BsFullscreen size={22} />
            )}
          </div>
        </div>
      </div>
      <ReactPlayer
        width="100%"
        height={477}
        url={url}
        playing={videoState.playing}
        volume={videoState.playerVolume}
        onProgress={onProgress}
        onDuration={onDuration}
        ref={videoRefs}
      />
    </div>
  );
};

export default VideoPlayer;
