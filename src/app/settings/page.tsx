"use client";
import './settings.css'
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
  const auth = getAuth(app);
  const userId = user?.uid;
 const router = useRouter();
  
  useEffect(() => {
    console.log('🔍 Settings Component Mounted');
    console.log('📦 openModal function:', openModal);
    console.log('📦 useModalStore state:', useModalStore.getState());
  }, []);

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

  const handleUpgrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('🚀 handleUpgrade called');
    console.log('👤 Current user:', user);
    
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      console.log('❌ No user found, attempting to open login modal');
      console.log('📦 openModal function type:', typeof openModal);
      console.log('📦 Modal store state BEFORE:', useModalStore.getState());
      
      openModal("logIn"); 
      
      console.log('📦 Modal store state AFTER:', useModalStore.getState());
      console.log('✅ openModal("logIn") executed');
      return;
    }
    
    console.log('✅ User authenticated, navigating to /choose-plan');
    router.push('/choose-plan');
  };

  const handleLoginButtonClick = () => {
    console.log('🔘 Login button clicked (not logged in view)');
    console.log('📦 openModal function:', openModal);
    console.log('📦 Modal store state BEFORE:', useModalStore.getState());
    
    openModal("logIn");
    
    console.log('📦 Modal store state AFTER:', useModalStore.getState());
  };
   
 
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('🔐 Auth state changed:', currentUser?.email || 'No user');
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
  
  if (!user) {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='section__title page__title'>Settings</div>
            <div className='settings__login--wrapper'>
              <img alt='login' src='/login.png' />
              <div className='settings__login--text'>Login To Your Account To See Your Details</div>
              <button 
                className='btn settings__login--btn' 
                onClick={handleLoginButtonClick}
              >
                Login
              </button>
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
                style={{ 
                  width: '200px', 
                  marginTop: '10px',  
                  opacity: isUpgrading ? 0.7 : 1, 
                  cursor: isUpgrading ? 'not-allowed' : 'pointer' 
                }}
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
            <div className='settings__text'>{loading ? "Loading..." : user?.email || "Guest"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings