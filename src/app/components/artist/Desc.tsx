"use client";

import Heading from "../Heading";

type IntroductionType = {
  ti: string;
  txt: string;
};

interface DescProps {
  introduction?: IntroductionType[];
  briefDesc?: string;
}

const Desc: React.FC<DescProps> = ({ introduction, briefDesc }) => {
  return (
    <div>
      <div>
        <h1 className="text-base font-bold">简介</h1>
        <div className="mt-2 text-base font-normal text-[#a7a7a7] leading-8">
          {briefDesc}
        </div>
      </div>
      {introduction?.length !== 0 && (
        <div className="flex flex-col gap-4 mt-4">
          {introduction?.map((item, index) => (
            <div key={index}>
              <h1 className="text-base font-bold">{item.ti}</h1>
              <div className="text-base font-normal leading-8 text-[#a7a7a7]">
                {item.txt}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Desc;
