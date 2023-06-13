import http from "./index";

export const getListDetail = async (id: string) => {
  const { data } = await http.post(`playlist/detail?id=${id}`);

  return data;
};

export const getListTrack = async (id: string) => {
  const { data } = await http.post(`playlist/track/all?id=${id}&limit=10`);
  return data;
};
