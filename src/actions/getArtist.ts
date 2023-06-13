import http from "./index";

export const getArtistDetail = async (id: string) => {
  const { data } = await http.post(`/artist/detail?id=${id}`);

  return data;
};

export const getArtistDesc = async (id: string) => {
  const { data } = await http.post(`/artist/desc?id=${id}`);

  return data;
};

// 歌手热歌
export const getArtistHotsong = async (id: string) => {
  const { data } = await http.post(`/artists?id=${id}`);

  return data;
};
