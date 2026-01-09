import React, { useState } from 'react'
import './Modal.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseItems/firebase';
import { useRouter } from 'next/navigation';




const SignupModal =({
  onClose,
  setModalType,
}: {
  onClose: () => void;
  setModalType: (type: "logIn" | "signUp") => void;
}) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
const router = useRouter();
   const handleInputChange = (setter: any, value: string) => {
  setter(value);
  if (msg) setMsg(""); 
};

   const handleSignup = async (e) => {
    e.preventDefault();
     try {
    await createUserWithEmailAndPassword(auth, email, password);
    onClose();
    router.replace('/for-you'); 
  } catch (err: any) {
    switch (err.code) {
      case 'auth/invalid-email':
        setMsg("That email address is not valid.");
        break;
      case 'auth/weak-password':
        setMsg("Password is too short .");
        break;
      case 'auth/email-already-in-use':
        setMsg("This email is already registered.");
        break;
      default:
        setMsg("An error occurred during registration.");
    }
  }
};
     
 
  return (
    <div>
      <div id='__next'>
<div className='wrapper wrapper__full'>
<div className='sidebar__overlay sidebar__overlay--hidden'></div>
<div className='auth__wrapper' >
<div className='auth'>
<div className='auth_content'>
<div className='auth__title'>Sign Up With Summarist</div>
<form  className='auth__main--form' onSubmit={handleSignup}>
    <input className='auth__main--input' type='email' placeholder='Email Address' onChange={(e) =>  handleInputChange(setEmail,e.target.value)} />
    <input className='auth__main--input' type='password' placeholder='Password' onChange={(e) =>  handleInputChange(setPassword,e.target.value)}/>
    <button type='submit' className='btn'>
        <span>Sign Up</span>
    </button>
    </form>
    <p>{msg}</p>
    </div>
    <button className='auth__switch--btn'  onClick={() => setModalType("logIn")}>Already Have An Account?</button>
   <div className='auth__close--btn'  onClick={onClose} >
    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
</div>
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default SignupModal
