'use client'
import SigninModal from "@/components/Modal/SigninModal"
import SignupModal from "@/components/Modal/SignupModal"
import { useModalStore } from "@/store/useModalStore"
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/FirebaseItems/firebase";


export default function ModalManager() {
  const { modalType, closeModal, setModalType } = useModalStore();
const [user, loading] = useAuthState(auth);

 useEffect(() => {
    if (!loading && user) {
      closeModal();
    }
  }, [user, loading, closeModal]);
   if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
     
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={closeModal} 
      />
      
     
      <div className="relative z-10">
        {modalType === "logIn" ? (
          <SigninModal onClose={closeModal} setModalType={setModalType} />
        ) : (
          <SignupModal onClose={closeModal} setModalType={setModalType} />
        )}
      </div>
    </div>
  );
}
