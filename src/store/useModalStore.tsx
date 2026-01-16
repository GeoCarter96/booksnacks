import { create } from 'zustand';



type ModalType = "logIn" | "signUp" | null;

interface ModalState {
   modalType: ModalType;
  openModal: (type: "logIn" | "signUp") => void;
  closeModal: () => void;
  setModalType: (type: "logIn" | "signUp") => void;
   isOpen: boolean;
}


export const useModalStore = create<ModalState>((set) => ({
   isOpen: false,
   modalType: null, 
  openModal: (type) => {
    console.log("Store: Setting isOpen to true"); // Check if this hits your console
    return set(() => ({ 
      isOpen: true, 
      modalType: type 
  }));
  },

  closeModal: () => set({ 
    isOpen: false, 
    modalType: null 
  }),

  setModalType: (type) => set({ 
    modalType: type 
  }),
  
}));
  
