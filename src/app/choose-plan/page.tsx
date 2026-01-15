'use client'
import { initFirebase } from '../FirebaseItems/firebase'
import './chooseplan.css'
import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { getPremiumStatus } from '../Stripe/PremiumStatus';

import { Stripe } from '../Stripe/Stripe';
import { useRouter } from 'next/navigation';
export default function ChoosePlan() {
const app =initFirebase();
const auth = getAuth(app);

const userName = auth.currentUser?.displayName;
const email = auth.currentUser?.email;
const router = useRouter();
const  [isPremium, setIsPremium] = useState(false);
const [premiumPlus, setPremiumPlus ] = useState(false)
const [selectedPlan, setSelectedPlan] = useState('plus');
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleAccordion = (index: number) => {
     console.log("Opening card:", index);
  setOpenIndex(openIndex === index ? null : index);
};
  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus(app)
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [app, auth.currentUser?.uid]);
const upgradeToPremium = async () => {
    const priceId = 'prod_TnUF3zJZOVtKbz';
    const checkoutUrl = await Stripe(app, priceId)
    router.push(checkoutUrl);
    console.log('Upgrade to Premium')
}

const upgradeToPremiumPlus = async () => {
    const priceId2 = 'prod_TnUFRKAyAfZDdx';
const checkoutUrl2 = await Stripe(app,priceId2)
router.push(checkoutUrl2);
console.log('Upgrade to Premium Plus')
}


  return (
    <div>
      <div id='__next'>
        <div className='wrapper wrapper__full'>
            <div className='sidebar__overlay sidebar__overlay--hidden'></div>
            <div className='plan'>
                <div className='plan__header--wrapper'>
                    <div className='plan__header'>
                        <div className='plan__title'>
                            Get Unlimited Access To Many Amazing Books To Read
                        </div>
                        <div className='plan__sub--title'>
                            Turn Ordinary Moments Into Amazing Learning Opportunities
                        </div>
                        <figure className='plan__img--mask'>
                            <img alt='pricing' src='/pricing-top.png'/>
                        </figure>
                    </div>
                </div>
                <div className='row'>
                    <div className='container'>
                        <div className='plan__features--wrapper'>
                            <div className='plan__features'>
                                <figure className='plan__features--icon'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"></path></svg>
                                </figure>
                                <div className='plan__features--text'>
                                    <b>Key Ideas In A Few Minutes</b>
                                    With Many Books To Read
                                </div>
                            </div>
                            <div className='plan__features'>
                                <figure className='plan__features--icon'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M21 3v2c0 3.866-3.134 7-7 7h-1v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-3c0-3.866 3.134-7 7-7h3zM5.5 2c2.529 0 4.765 1.251 6.124 3.169C10.604 6.51 10 8.185 10 10v1h-.5C5.358 11 2 7.642 2 3.5V2h3.5z"></path></g></svg>
                                </figure>
                                <div className='plan__features--text'>
                                    <b>3 Million</b>
                                    People Growing With Summarist Everyday
                                </div>
                            </div>
                            <div className='plan__features'>
                                <figure className='plan__features--icon'>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>
                                </figure>
                                <div className='plan__features--text'>
                                    <b>Precise Recommendations</b>
                                    Collections Curated By Experts
                                </div>
                            </div>
                        </div>
                        <div className='section__title'>
                            Choose The Plan That Fits You
                        </div>
                        <div  className={`plan__card ${selectedPlan === 'plus' ? 'plan__card--active' : ''}`}
      onClick={() => setSelectedPlan('plus')}>
                            <div className='plan__card--circle'>
                                {selectedPlan === 'plus' && <div className='plan__card--dot'></div>}
                            </div>
                            <div className='plan__card--content'>
                                <div className='plan__card--title'>
                                    Premium Plus Yearly
                                </div>
                                <div className='plan__card--price'>
                                    $99.99/year 
                                </div>
                                <div className='plan__card--text'>
                                    7-day Free Trial Included
                                </div>
                            </div>
                        </div>
                        <div className='plan__card--separator'>
                            <div className='plan__separator'>Or</div>
                        </div>
                        <div  className={`plan__card ${selectedPlan === 'basic' ? 'plan__card--active' : ''}`}
      onClick={() => setSelectedPlan('basic')}>
                            <div className='plan__card--circle'>
                                 {selectedPlan === 'basic' && <div className='plan__card--dot'></div>}
                            </div>
                            
                            <div className='plan__card--content'>
                                <div className='plan__card--title'>
                                    Premium Basic Monthly 
                                </div>
                                <div className='plan__card--price'>
                                    $9.99/Month 
                                </div>
                                <div className='plan__card--text'>
                                    No Trial Included 
                                </div>
                            </div>
                        </div>
                        <div className='plan__card--cta'>
                            <span className='btn--wrapper'>
                                <button className='btn' style={{width: '300px'}}>
                                    <span>{selectedPlan === 'plus' ? 'Start Your Free 7-Day Trial' : 'Start Your First Month'}</span>
                                </button>
                            </span>
                            <div className='plan__disclaimer'>
                                {selectedPlan === 'basic' 
    ? "30 Day Money Back Guarantee, No Questions Asked" 
    : "Cancel Your Trial At Any Time Before It Ends, And You Won't Be Charged"}
                            </div>
                        </div>
                        <div className='faq__wraapper'>
                            <div className='accordion__card'>
                                <div className='accordion__header' onClick={() => toggleAccordion(0)} >
                                    <div className='accordion__title'>
                                        How Does The Free 7-Day Trial Work?
                                    </div>
                                    <svg className={`accordion__icon ${openIndex === 0 ? 'accordion__icon--rotate' : ''}`}  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                                </div>
                                
                                <div className={`collapse ${openIndex === 0 ? 'show' : ''}`} >
                                    <div className='accordion__body'>
                                        Begin Your Complimentary 7-Day Trial With A Summarist Annual Membership. You Are Under No Obligation To Continue Your Subscription, And You Will Only Be Billed When The Trial Period Expires. With Premium Access, You Can Learn At Your Own Pace And As Frequently As You Desire, And You May Terminate Your Subscription Prior To The Conclusion Of The 7-Day Free Trial.
                                    </div>
                                </div>
                                 
                            </div>
                             <div className='accordion__card'>
                                <div className='accordion__header'onClick={() => toggleAccordion(1)}>
                                    <div className='accordion__title'>
                                        Can I Switch Subscriptions From Monthly To Yearly, Or Yearly To Monthly?
                                    </div>
                                    <svg className={`accordion__icon ${openIndex === 1? 'accordion__icon--rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                                </div>
                                 
                                <div className={`collapse ${openIndex === 1 ? 'show' : ''}`}>
                                    <div className='accordion__body'>
                                       While An Annual Plan Is Active, It Is Not Feasible To Switch To A Monthly Plan. However, Once The Current Month Ends, Transitioning From A Monthly Plan To An Annual Plan Is An Option.
                                    </div>
                                </div>
                                 
                             </div>
                              <div className='accordion__card'>
                                <div className='accordion__header' onClick={() => toggleAccordion(2)}>
                                    <div className='accordion__title'>
                                        What's Included In The Premium Plan?
                                    </div>
                                    <svg className={`accordion__icon ${openIndex === 2 ? 'accordion__icon--rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                                </div>
                               
                                <div className={`collapse ${openIndex === 2 ? 'show' : ''}`}>
                                    <div className='accordion__body'>
                                        Premium Membership Provides You With The Ultimate Summarist Experience, Including Unrestricted Entry To Many Best-Selling Books High-Quality Audio, The Ability To Download Titles For Offline Reading, And The Option To Send Your Reads To Your Kindle.
                                    </div>
                                </div>
                                  
                              </div>
                               <div className='accordion__card'>
                                <div className='accordion__header' onClick={() => toggleAccordion(3)}>
                                    <div className='accordion__title'>
                                       Can I Cancel During My Trial Or Subscription?
                                    </div>
                                    <svg className={`accordion__icon ${openIndex === 3 ? 'accordion__icon--rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                                </div>
                                
                                <div className={`collapse ${openIndex === 3 ? 'show' : ''}`}>
                                    <div className='accordion__body'>
                                        You Will Not Be Charged If You Cancel Your Trial Before Its Conclusion. While You Will Not Have Complete Access To The Entire Summarist Library, You Can Still Expand Your Knowledge With One Curated Book Per Day.
                                    </div>
                                </div>
                                 
                               </div>
                        </div>
                    </div>
                </div>
                <section id='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='footer__top--wrapper'>
                                <div className='footer__block'>
                                    <div className='footer__block'>
                                        <div className='footer__link--title'>
                                            Actions
                                        </div>
                                        <div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Summarist Magazine</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Cancel Subscription</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Help</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className='footer__block'>
                                    <div className='footer__link--title'>
                                           Useful Links
                                        </div>
                                        <div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Pricing</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Summarist Business</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Gift Cards</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Authors & Publishers</a>
                                            </div>
                                        </div>
                                 </div>
                                  <div className='footer__block'>
                                    <div className='footer__link--title'>
                                            Company
                                        </div>
                                        <div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>About</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Careers</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Partners</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Code Of Conduct</a>
                                            </div>
                                        </div>
                                  </div>
                                   <div className='footer__block'>
                                    <div className='footer__link--title'>
                                            Other
                                        </div>
                                        <div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Sitemap</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Legal Notice</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Terms Of Service</a>
                                            </div>
                                            <div className='footer__link--wrapper'>
                                                <a className='footer__link'>Privacy Policies</a>
                                            </div>
                                        </div>
                                   </div>
                            </div>
                            <div className='footer__copyright--wrapper'>
                                <div className='footer__copyright'>
                                    Copyright &copy; 2026 Summarist
                                </div>
                            </div>
                        </div>
                         </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  )
}
