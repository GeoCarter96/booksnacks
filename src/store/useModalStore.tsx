import { create } from 'zustand';



type ModalType = "logIn" | "signUp" | null;

interface ModalState {
   modalType: ModalType;
  openModal: (type: "logIn" | "signUp") => void;
  closeModal: () => void;
  setModalType: (type: "logIn" | "signUp") => void;
  
}


export const useModalStore = create<ModalState>((set) => ({
   
   modalType: null, 
  openModal: (type) => set({ modalType: type }),
  closeModal: () => set({ modalType: null }),
  setModalType: (type) => set({ modalType: type }),
  
}));