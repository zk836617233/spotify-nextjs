import http from "./index";

export const getSongUrl = async (id: string) => {
  const { data } = await http.post(`/song/url?id=${id}`);

  return data;
};
