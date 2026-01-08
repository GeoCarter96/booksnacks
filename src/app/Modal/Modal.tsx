"use client";
import React, { useState } from 'react'
import './Modal.css'
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType?: "logIn" | "signUp";
  setModalType?: (type: "logIn" | "signUp") => void;
}


const Modal = ({ isOpen, onClose, modalType, setModalType  }: ModalProps) => {
 if (!isOpen) return null;


 if (modalType === "logIn" && setModalType) {
    return <SigninModal setModalType={setModalType} onClose={onClose} />;
  } else {
    return <SignupModal onClose={onClose} setModalType={setModalType!} />;
  }
 /*return (

<div>
</div>
)*/
}

export default Modal