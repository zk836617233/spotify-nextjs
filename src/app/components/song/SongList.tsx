"use client";

interface SongListProps {
  children: React.ReactNode;
}

const SongList: React.FC<SongListProps> = ({ children }) => {
  return (
    <div className="px-8">
      <header className="h-[36px] grid items-center border-b-[1px] border-[#41484a] px-4 songlist-header">
        <div className="text-[#b3b3b3] text-sm font-normal">#</div>
        <div className="text-[#b3b3b3] text-sm font-normal">标题</div>
        <div className="text-[#b3b3b3] text-sm font-normal">专辑</div>
        <div className="text-[#b3b3b3] text-sm font-normal">发行时间</div>
        <div className="text-[#b3b3b3] text-sm font-normal">时长</div>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default SongList;
