'use client'
import './LoginPage.css'
import { useModalStore } from '@/store/useModalStore'

export default function LoginPage() {
      const openModal = useModalStore((state) => state.openModal);

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
