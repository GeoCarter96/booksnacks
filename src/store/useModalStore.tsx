import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  view: 'logIn' | 'signUp';
  openModal: (view: 'logIn' | 'signUp') => void;
   closeModal: () => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  view: 'logIn',
  openModal: (view) => set({ isOpen: true, view }),
  closeModal: () => set({ isOpen: false }),
}));