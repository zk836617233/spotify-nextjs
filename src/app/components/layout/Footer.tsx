import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-8 pb-24">
      <hr className="my-4 border-[#313131]" />
      <div className="text-[#6a6a6a] flex flex-col gap-2">
        <p>© 2023 Spotify AB</p>
        <p>Nextjs：13.3.1 (APP.Beta版)</p>
        <p> Reactjs：18.2.0</p>
        <p>
          API：
          <Link
            className="hover:text-white hover:underline transition duration-200"
            href={
              "https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi"
            }
          >
            网易云音乐 NodeJS 版 API NeteaseCloudMusicApi
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
