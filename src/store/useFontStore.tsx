import { create } from 'zustand';

const useFontStore = create((set) => ({
  fontSize: '18px', 
  setFontSize: (size) => set({ fontSize: size }),
}));

export default useFontStore;
