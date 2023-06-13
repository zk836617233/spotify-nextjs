"use client";

import type { IdentifyType } from "@/app/types";
import Image from "next/image";

interface ArtistCardProps {
  cover: string;
  name: string;
  alias?: string[];
  albumSize?: number;
  musicSize?: number;
  mvSize?: number;
  identify?: IdentifyType | undefined | null;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  cover,
  name,
  alias,
  albumSize,
  musicSize,
  mvSize,
  identify,
}) => {
  return (
    <div className="relative w-full h-[40vh]">
      <div className="w-full h-full aspect-square absolute top-0 left-0 z-0">
        <Image
          src={`${cover}?param=640y300`}
          fill
          alt="singer"
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full h-[40vh] absolute top-0 left-0 z-10 flex flex-col gap-4 justify-end px-8 py-6">
        {/* <div>认证</div> */}
        {identify && (
          <div className="flex items-center gap-2">
            <Image src={"/svg/identify.svg"} width={24} height={24} alt="img" />
            <span className="text-sm font-normal">
              认证艺人：{identify.imageDesc}
            </span>
          </div>
        )}
        <h1 className="text-8xl font-black">{name}</h1>
        <div className="text-sm font-normal flex gap-2">
          {alias?.length !== 0 &&
            alias?.map((item, index) => <span key={index}>{item}</span>)}
        </div>
        <div className="flex gap-4">
          <span>单曲数：{albumSize}</span>
          <span>专辑数：{musicSize}</span>
          <span>MV数：{mvSize}</span>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
