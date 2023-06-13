import EmptyState from "@/app/components/EmptyState";
import SongCard from "@/app/components/song/SongCard";
import Title from "@/app/components/Title";
import { getPersonalized, getAlbumNewsong } from "@/actions/getHome";

export default async function Home() {
  const personalizedData = await getPersonalized();

  const albumNewsongData = await getAlbumNewsong();

  if (personalizedData.code !== 200) {
    return <EmptyState title="没有找到内容!" subtitle="刷新页面试一下" />;
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <section>
        <Title title="推荐歌单" subTitle="显示全部" />
        <div className="songcard-box">
          {personalizedData.result.map((item: any) => (
            <SongCard
              key={item.id}
              name={item.name}
              picUrl={item.picUrl}
              playCount={item.playCount}
              navigationLink="/playlist/"
              id={item.id}
            />
          ))}
        </div>
      </section>
      <section>
        <Title title="推荐新音乐" subTitle="显示全部" />
        <div className="songcard-box">
          {albumNewsongData.albums.map((item: any) => (
            <SongCard
              key={item.id}
              name={item.name}
              picUrl={item.picUrl}
              singer={item.artist.name}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
