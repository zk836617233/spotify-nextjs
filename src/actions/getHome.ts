import http from "./index";

export const getPersonalized = async () => {
  const { data } = await http.post("personalized?limit=5");

  return data;
};

export const getAlbumNewsong = async () => {
  const { data } = await http.post("album/newest");
  return data;
};
