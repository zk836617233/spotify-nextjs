import {
  getArtistDetail,
  getArtistDesc,
  getArtistHotsong,
} from "@/actions/getArtist";
import Desc from "@/app/components/artist/Desc";
import ArtistCard from "@/app/components/artist/artistCard";
import SongTable from "@/app/components/song/SongTable";

interface ArtistPageParams {
  id: string;
}

const ArtistPage = async ({ params }: { params: ArtistPageParams }) => {
  const { data: artistDetailData } = await getArtistDetail(params.id);
  const artistDesc = await getArtistDesc(params.id);
  const hotSong = await getArtistHotsong(params.id);

  return (
    <main className="">
      <div className="flex p-4 gap-4">
        <div className="flex-1">
          <ArtistCard
            cover={artistDetailData.artist.cover}
            name={artistDetailData.artist.name}
            albumSize={artistDetailData.artist.albumSize}
            musicSize={artistDetailData.artist.musicSize}
            mvSize={artistDetailData.artist.mvSize}
            identify={artistDetailData.identify}
            alias={artistDetailData.artist.alias}
          />

          {hotSong.hotSongs.map((item: any, index: number) => (
            <SongTable
              album={item.al}
              singer={item.ar}
              key={index}
              title={item.name}
              time={item.dt}
              publishTime={item.publishTime}
              index={index}
              songId={item.id}
            />
          ))}
        </div>
        <div className="flex-1">
          <Desc
            introduction={artistDesc.introduction}
            briefDesc={artistDesc.briefDesc}
          />
        </div>
      </div>
    </main>
  );
};

export default ArtistPage;
