"use client";

import Image from "next/image";
import { IoHeadset } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Avatar from "../Avatar";

interface SongCardProps {
  name: string;
  picUrl: string;
  playCount?: number;
  singer?: string;
  navigationLink?: string;
  id?: number;
}

const SongCard: React.FC<SongCardProps> = ({
  name,
  picUrl,
  playCount,
  singer,
  navigationLink,
  id,
}) => {
  const router = useRouter();

  const navigationPlaylist = useCallback(() => {
    if (navigationLink) {
      router.push(`${navigationLink}${id}`);
    }
  }, [navigationLink, router, id]);
  return (
    <div
      className="p-4 w-full rounded relative bg-[#181818] cursor-pointer transition duration-150 hover:bg-[#282828] group"
      onClick={navigationPlaylist}
    >
      <div className="aspect-square w-full relative overflow-hidden mb-4 z-10 songcard-shadow">
        <Avatar src={picUrl} fill />
        <div className="w-12 h-12 rounded-full absolute bottom-2 right-2 bg-primary flex justify-center items-center translate duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full songcard-play">
          <Image src={"/svg/play.svg"} alt="play" width={24} height={24} />
        </div>
      </div>
      <div className="text-white text-base font-bold mb-2 hide-text">
        {name}
      </div>
      <div className="text-white">{id}</div>
      {playCount && (
        <div className="flex justify-between">
          <IoHeadset size={20} className="fill-[#6a6a6a]" />
          <span className="text-sm font-normal text-[#6a6a6a]">
            {playCount}
          </span>
        </div>
      )}
      {singer && (
        <div className="text-sm font-normal text-[#6a6a6a]">{singer}</div>
      )}
    </div>
  );
};

export default SongCard;
