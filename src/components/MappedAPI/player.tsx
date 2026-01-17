'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/FirebaseItems/firebase'
import useFontStore from '@/store/useFontStore';
import { useModalStore } from '@/store/useModalStore'

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { useState, useEffect } from 'react';


export default function Player( {book :{ summary,  title, author, imageLink, audioLink}} : {book : Book}) {
    const openModal = useModalStore((state) => state.openModal);
     const [ user, loading, error] = useAuthState(auth);
      const fontSize = useFontStore((state) => state.fontSize);
const [isMounted, setIsMounted] = useState(false);
if (error) return <div>Error</div>;
 useEffect(() => {
    setIsMounted(true);
  }, []);
if (!isMounted){
    
    return (
      <div className="spinner__wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="spinner" style={{ width: "50px" }} />
      </div>
  );
}
   
  
    
   if (!user){
     return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='section__title page__title'>{title}</div>
            <div className='settings__login--wrapper'>
                <img alt='login' src='/login.png' />
                <div className='settings__login--text'>Login To Your Account To Read And Listen To The Book</div>
                <button className='btn settings__login--btn' onClick={() => openModal("logIn")}>Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}
    
   

  return (
    <div>
      <div className="summary"  suppressHydrationWarning>
        <div className="audio__book--summary" >
            <div className="audio__book--summary-title">
                <b>{title}</b>
            </div>
            <div className="audio__book--summary-text"  style={{ fontSize: fontSize }}>
                {summary}
                </div>

        </div>
         
      </div>
       <AudioPlayer
                  audioSrc={audioLink}
                  title={title}
                  author={author}
                  imageLink={imageLink}
                />
    </div>
  )
}
