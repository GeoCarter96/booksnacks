"use client";

import './Modal.css'
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';
import { useModalStore } from '@/store/useModalStore';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType?: "logIn" | "signUp";
  setModalType?: (type: "logIn" | "signUp") => void;
}


const Modal = ({ isOpen, onClose, modalType, setModalType  }: ModalProps) => {
 if (!isOpen) return null;
const ismodalType = useModalStore((state) => state.modalType);
if (!ismodalType) return null;

 if (modalType === "logIn" && setModalType) {
    return <SigninModal setModalType={setModalType} onClose={onClose} />;
  } else {
    return <SignupModal onClose={onClose} setModalType={setModalType!} />;
  }
 
}

export default Modal