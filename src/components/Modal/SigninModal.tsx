"use client";
import  {useState} from 'react'
import './Modal.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/FirebaseItems/firebase'
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { signInAnonymously } from "firebase/auth";

const SigninModal = ({
  setModalType,
  onClose,
}: {
  setModalType: (type: "logIn" | "signUp") => void;
  onClose: () => void;
}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [msg, setMsg] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [isGuestLoading, setIsGuestLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleInputChange = (setter: any, value: string) => {
  setter(value);
  if (msg) setMsg(""); 
};

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGuestLoading(true);
    try {
    await signInWithEmailAndPassword(auth, email, password);
     if (pathname === '/') {
            router.push('/for-you');
        } 
        
        else {
            router.refresh();
        }

        onClose();
   
  } catch (err: any) {
    switch (err.code)
     {
      case 'auth/invalid-email':
        setMsg("Invalid email format.");
        break;
      case 'auth/invalid-credential':
     setMsg("User not found or incorrect password.");
        break;
      case 'auth/too-many-requests':
        setMsg("Too many attempts. Try again later.");
        break;
      default:
        setMsg("Login failed. Please try again.");
    } setIsLoading(false)
  }
};
const handleGuestLogin = async () => {
  setIsGuestLoading(true);
  try {
    await signInAnonymously(auth);
   
    if (pathname === '/') {
            router.push('/for-you');
        } 
        
        else {
            router.refresh();
        }

        onClose();
    
  } catch (error) {
    console.error("Guest login failed");
    setIsGuestLoading(false);
  }
};

  return (
    <div>
<div id='__next'>
<div className='wrapper wrapper__full'>
<div className='sidebar__overlay sidebar__overlay--hidden'></div>
<div className='auth__wrapper'>
<div className='auth'>
<div className='auth_content'>
<div className='auth__title'>Login To Summarist</div>
<button className='btn guest__btn--wrapper'onClick={handleGuestLogin}  disabled={isGuestLoading || isLoading}>
<figure className='google__icon--mask guest__icon--mask'>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
</figure>

<div  >{isGuestLoading ? 'Loading...' : 'Login As A Guest'}</div>

</button>

<div className='auth__separator'>
    <span className='auth__separator--text'>or</span>
</div>

<form onSubmit={handleLogin}  className='auth__main--form'>
    <input className='auth__main--input' type='email' placeholder='Email Address' onChange={(e) => handleInputChange(setEmail,e.target.value)} />
    <input className='auth__main--input' type='password' placeholder='Password'  onChange={(e) => handleInputChange(setPassword,e.target.value)} />
    <button type='submit' className='btn' disabled={isLoading || isGuestLoading}>
        <span>{isLoading ? 'Logging in...' : 'Login'}</span>
    </button>
</form>
<p>{msg}</p>
</div>
<div className='auth__forgot--password'>Forgot Your Password?</div>

<button className='auth__switch--btn'  onClick={() => {
                  setModalType("signUp");
                }}>Don't Have An Account?</button>

<div className='auth__close--btn' onClick={onClose} >
    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
</div>

</div>
   
  )
}

export default SigninModal