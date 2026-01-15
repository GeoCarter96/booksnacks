import { create } from 'zustand';

interface FontState {
  fontSize: string;
  setFontSize: (size: string) => void;
}


const useFontStore = create<FontState>((set) => ({
  fontSize: '22px',
  setFontSize: (size) => set({ fontSize: size }),
}));


export default useFontStore;