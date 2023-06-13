"use client";

import Image from "next/image";

interface AvatarProps {
  fill?: boolean;
  width?: number;
  height?: number;
  src?: string | null | undefined;
  rounded?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  fill,
  src,
  width,
  height,
  rounded,
}) => {
  return (
    <Image
      className={`${rounded ? "rounded-full" : "rounded"} object-cover songcard-shadow`}
      src={src || "/svg/error.svg"}
      alt="img"
      fill={fill}
      width={width}
      height={height}
    />
  );
};

export default Avatar;
