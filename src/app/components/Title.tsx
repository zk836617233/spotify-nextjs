"use client";

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div className="w-full flex justify-between my-4">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-sm font-bold text-[#b3b3b3] cursor-pointer transition duration-200 hover:opacity-70">{subTitle}</div>
    </div>
  );
};

export default Title;
