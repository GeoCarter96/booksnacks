"use client";
import './settings.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseItems/firebase';
import { useModalStore } from '@/store/useModalStore'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../FirebaseItems/firebase';
import { User } from "firebase/auth";
import { db } from '../FirebaseItems/firebase';
import { doc, onSnapshot } from 'firebase/firestore';



const Settings = () => {
  const [userPlan, setUserPlan] = useState('basic');
  const [isUpgrading, setIsUpgrading] = useState(false);
 const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const openModal = useModalStore((state) => state.openModal);
const setModalType = useModalStore((state) => state.setModalType);

  const auth = getAuth(app);
   const userId = user?.uid
   useEffect(() => {
  if (!userId) return;
  
  const fetchPlan = async () => {
    
    const customerRef = doc(db, `customers/${userId}/subscriptions/SUB_ID`);
      };

  fetchPlan();
}, [userId]);

useEffect(() => {
  if (!user?.uid) return;

  
  const userRef = doc(db, 'users', user.uid);

  
  const unsubscribe = onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setUserPlan(data.plan || 'basic'); 
    } else {
      setUserPlan('basic');
    }
  });

  return () => unsubscribe();
}, [user?.uid]);
const handleUpgrade = () => {
  if (!user){
    console.log("Guest detected! Opening modal...");
    setModalType("signUp"); 
    openModal("signUp");  
    return;
  }
  setIsUpgrading(true);
  router.push('/choose-plan');
};


   
const router = useRouter();


 useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
      return () => unsubscribe(); 
  }, [auth]);
 
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
       <div className='settings__text' style={{ textTransform: 'capitalize' }}>
         {!user ? "Basic" : (userPlan === 'premium-plus' ? 'Premium Plus' : userPlan)}
    </div>

   
    {userPlan !== 'premium-plus' && (
        <button 
            className='btn' 
            style={{ width: '200px', marginTop: '10px',  opacity: isUpgrading ? 0.7 : 1, 
      cursor: isUpgrading ? 'not-allowed' : 'pointer' }}
              onClick={handleUpgrade}
    disabled={isUpgrading}
        >
           <span>
  {isUpgrading ? 'Loading...' : (
    !user || userPlan === 'basic' ? 'Upgrade to Premium' : 'Upgrade to Premium Plus'
  )}
</span>

        </button>
    )}
</div>
<div className='setting__content'>
    <div className='settings__sub--title'>Email</div>
    <div className='settings__text'>  {loading ? "Loading..." : user?.email || "Guest"}</div>
</div>
</div>
</div>
</div>
)
}

export default Settings
