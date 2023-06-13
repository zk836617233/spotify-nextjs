"use client";

import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsBarChartSteps } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { GiLoveSong } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="p-6 text-gray-500 text-base h-screen overflow-y-scroll hide-scrollbar">
      <Link href={'/'}>
        <Image src={"/svg/home-logo.svg"} className="mb-5" alt="logo" width={130} height={40} />
      </Link>
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 transition duration-300 hover:text-white"
          >
            <AiOutlineHome size={24} />
            <p>主页</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 transition duration-300 hover:text-white"
          >
            <AiOutlineSearch size={24} />
            <p>搜索</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 transition duration-300 hover:text-white"
          >
            <BsBarChartSteps size={24} />
            <p>排行榜</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 transition duration-300 hover:text-white"
          >
            <TbMicrophone2 size={24} />
            <p>歌手</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center space-x-2 transition duration-300 hover:text-white"
          >
            <GiLoveSong size={24} />
            <p>歌曲</p>
          </Link>
        </li>
      </ul>
      <hr className="border-t-[0.1px] border-gray-900 mt-4" />
      <ul className="space-y-4 mt-5">
        <li className="space-x-2 transition duration-300 hover:text-white">
          play of list
        </li>
        <li className="space-x-2 transition duration-300 hover:text-white">
          play of list
        </li>
        <li className="space-x-2 transition duration-300 hover:text-white">
          play of list
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
