import { create } from "zustand";

interface PlayerStore {
  songId: string;
  setSongid: (id: string | undefined) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  songId: "",
  setSongid: (id) => {
    if (id) {
      set({ songId: id });
    }
  },
}));

export default usePlayer;
