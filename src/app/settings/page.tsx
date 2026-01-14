"use client";
import './settings.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseItems/firebase';
import { useModalStore } from '@/store/useModalStore'

const Settings = () => {
   const [user, loading] = useAuthState(auth);
   const openModal = useModalStore((state) => state.openModal);


 
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="section__title page__title">Settings</div>
          <div className="settings__loading">Loading your details...</div>
        </div>
      </div>
    );
  } 
   if (!user){
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='section__title page__title'>Settings</div>
            <div className='settings__login--wrapper'>
                <img alt='login' src='/login.png' />
                <div className='settings__login--text'>Login To Your Account To See Your Details</div>
                <button className='btn settings__login--btn' onClick={() => openModal("logIn")}>Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}
  return (
<div>
<div className='container'>
<div className='row'>
<div className='section__title page__title'>Settings</div>
<div className='setting__content'>
    <div className='settings__sub--title'>Your Subscription Plan</div>
    <div className='settings__text'>Premium</div>
</div>
<div className='setting__content'>
    <div className='settings__sub--title'>Email</div>
    <div className='settings__text'>{user?.email || "No email found"}</div>
</div>
</div>
</div>
</div>
)
}

export default Settings
