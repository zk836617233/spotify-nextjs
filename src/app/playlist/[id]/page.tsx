import Image from "next/image";
import dayjs from "dayjs";
import SongList from "@/app/components/song/SongList";
import SongTable from "@/app/components/song/SongTable";
import Avatar from "@/app/components/Avatar";
import { getListDetail, getListTrack } from "@/actions/getPlaylist";

interface PlaylistPageParams {
  id: string;
}

const PlaylistPage = async ({ params }: { params: PlaylistPageParams }) => {
  const playlistDetail = await getListDetail(params.id);

  const playlistTrack = await getListTrack(params.id);

  return (
    <div>
      <div className="m-h-[280px] w-full py-6 px-7 bg-slate-500 flex">
        <div className="w-[232px] h-[232px] min-w-[232px] aspect-square relative mr-6 playlist-shadow">
          <Avatar src={playlistDetail.playlist.coverImgUrl} fill />
        </div>
        <div className="flex flex-col justify-end gap-2">
          <div className="text-base font-bold text-white">歌单</div>
          <h1 className="text-white text-7xl font-black my-2">
            {playlistDetail.playlist.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <Image
                src={"/svg/smail-logo.svg"}
                width={24}
                height={24}
                alt="logo"
              />
              <span className="text-white font-bold text-base">spotify</span>
            </div>
            <span className="text-white text-sm font-normal">
              {playlistDetail.playlist.playCount}&nbsp;次播放
            </span>
            <span className="text-white text-sm font-normal">
              {playlistDetail.playlist.trackCount}&nbsp;首歌曲
            </span>
            <span className="text-white text-sm font-normal">
              {dayjs(playlistDetail.playlist.createTime).format("YYYY/MM/DD")}
              &nbsp;创建
            </span>
          </div>
          <div className="text-sm text-[#d3dadc] font-normal mt-2">
            {playlistDetail.playlist.description}
          </div>
        </div>
      </div>
      <div>
        <SongList>
          {playlistTrack.songs.map((item: any, index: number) => (
            <SongTable
              title={item.name}
              singer={item.ar}
              album={item.al}
              key={item.id}
              time={item.dt}
              publishTime={item.publishTime}
              index={index}
            />
          ))}
        </SongList>
      </div>
    </div>
  );
};

export default PlaylistPage;
