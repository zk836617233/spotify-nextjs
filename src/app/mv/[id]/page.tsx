import VideoPlayer from "@/app/components/play/VideoPlayer";
import React, { useEffect, useState } from "react";

const MvPage = () => {
  return (
    <div>
      <h1>mvpage</h1>
      <VideoPlayer url="http://vodkgeyttp8.vod.126.net/cloudmusic/3793/core/de43/667c55c652dbc078566ca5b4447a6e7b.mp4?wsSecret=bb012bbfdfef131da6c5f8148fae5c58&wsTime=1683612004" />
    </div>
  );
};

export default MvPage;
