"use client";

import { AlType, ArType } from "@/app/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import usePlayer from "@/hooks/usePlayer";

interface SongTableProps {
  title: string;
  singer: ArType[];
  album: AlType;
  time: string;
  publishTime: number;
  index: number;
  songId?: string;
}

const SongTable: React.FC<SongTableProps> = ({
  title,
  singer,
  time,
  album,
  index,
  publishTime,
  songId,
}) => {
  const PlayerExecute = usePlayer();
  const onDoubleClick = () => {
    PlayerExecute.setSongid(songId);
  };
  return (
    <div className="mt-4" onDoubleClick={onDoubleClick}>
      <div className="grid items-center h-[56px]  px-4 songlist-header rounded transition duration-150 hover:bg-[#393d3e]">
        <div className="text-[#b3b3b3] text-base font-normal">{index + 1}</div>
        <div className="flex items-center">
          <div className="mr-4">
            <Image src={album.picUrl} width={40} height={40} alt="img" />
          </div>
          <div className="flex flex-col justify-between">
            <Link
              href={"/"}
              className="text-base font-normal truncate hover:underline"
            >
              {title}
            </Link>
            <div className="">
              {singer.map((item, index) => (
                <>
                  <Link
                    href={`/artist/${item.id}`}
                    key={item.id}
                    className="text-[#b3b3b3] text-sm font-normal hover:underline"
                  >
                    {item.name}
                  </Link>
                  &nbsp;
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Link
            href={"/"}
            className="text-[#b3b3b3] text-sm font-normal hover:underline truncate"
          >
            {album.name}
          </Link>
        </div>
        <div className="text-[#b3b3b3]">
          {dayjs(publishTime).format("YYYY/MM/DD")}
        </div>
        <div className="text-[#b3b3b3]">{time}</div>
      </div>
    </div>
  );
};

export default SongTable;
