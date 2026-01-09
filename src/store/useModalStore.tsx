import {create} from 'zustand';


interface ModalStore {
  isOpen: boolean;
  openModal: () => void;
 onClose: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
     isOpen: false,
  openModal: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
  


export default useModalStore
