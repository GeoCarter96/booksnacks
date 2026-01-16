"use client";
import { useModalStore } from '@/store/useModalStore';
import './Modal.css'
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';






const Modal = () => {
   const { isOpen, modalType, closeModal, setModalType } = useModalStore();
    
   if (!isOpen) return null;

 
   if (modalType === "logIn") {
    return <SigninModal setModalType={setModalType} onClose={closeModal} />;
  } 
  
  return <SignupModal onClose={closeModal} setModalType={setModalType} />;
  
};

export default Modal;