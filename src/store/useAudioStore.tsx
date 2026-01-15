import { create } from 'zustand';
interface AudioState {
  currentBook: any | null;
  setCurrentBook: (book: any) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentBook: null,
  setCurrentBook: (book) => set({ currentBook: book }),
}));