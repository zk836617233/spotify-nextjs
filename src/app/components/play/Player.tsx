"use client";

import { FaPause, FaPlay } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import usePlayer from "@/hooks/usePlayer";
import { Howl, Howler } from "howler";
import { getSongUrl } from "@/actions/getSongUrl";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerExecute = usePlayer();

  useEffect(() => {
    // soundRef.current.play();
    if (playerExecute.songId) {
      getUrl();
    }
    // console.log(playerExecute.songId);
  }, [playerExecute.songId]);

  const getUrl = async () => {
    const { data } = await getSongUrl(playerExecute.songId);
    const soundRef = new Howl({
      src: [data[0].url],
      html5: true,
      volume: 1,
    });
    soundRef.play();
  };

  const playMusic = () => {
    setIsPlaying(false);
    soundRef.current.play();
  };

  const pauseMusic = () => {
    setIsPlaying(true);
    soundRef.current.pause();
  };

  return (
    <div className="w-full h-20 flex justify-between items-center px-4 bg-black">
      <div>
        <FcLike color="#fff" />
      </div>
      <div className="flex gap-4">
        <IoPlaySkipBackSharp size={20} />
        <div className="cursor-pointer">
          {isPlaying ? (
            <FaPlay
              size={20}
              className="transform duration-150 hover:scale-110"
              onClick={playMusic}
            />
          ) : (
            <FaPause
              size={20}
              className="transform duration-150 hover:scale-110"
              onClick={pauseMusic}
            />
          )}
        </div>

        <IoPlaySkipForwardSharp size={20} />
      </div>
      <div>
        <BsFillVolumeDownFill />
        <BsFillVolumeMuteFill />
      </div>
    </div>
  );
};

export default Player;
