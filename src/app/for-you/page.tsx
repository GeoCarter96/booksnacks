import  Link  from 'next/link'
import './foryou.css'



interface JustForYou {
  book: Books;
}



 

  export default  function ForYou ({book}: JustForYou) {
    
   
return(
<section>
 
<div className='row'>
<div className='container'>
<div className='for-you__wrapper'>
<div className='for-you__title'>Selected Just For You</div>
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
<a    className='selected__book' href='/book/f9gy1gpai8'>
<div   className='selected__book--sub-title' >
{book?.subTitle}
</div>
<div className='selected__book--line'></div>
<div  className='selected__book--content'>
<figure className='book__image--wrapper' >
<img className="book__image" src={book?.imageLink} alt="book" />
</figure>
<div className='selected__book--text'>
<div className='selected__book--title'>
{book?.title}
</div>
<div className='selected__book--author'>
{book?.author}
</div>
<div className='selected__book--duration-wrapper'>
<div className='selected__book--icon'>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path></svg>
</div>
<div className='selected__book--duration'>3 min 23 secs</div>
</div>
</div>
</div>
</a>
<div>
<div className='for-you__title'>Recommended For You</div>
</div>
<div className='for-you__sub--title'>We Think You'll Like These</div>
<div className='for-you__recommended--books'>
 <a className='for-you__recommended--books-link' href='/book/5bx150cz4bt'>
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-win-friends-and-influence-people.mp3?alt=media&amp;token=60872755-13fc-43f4-8b75-bae3fcd73991"></audio>
<figure className='book__image--wrapper' >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-win-friends-and-influence-people.png?alt=media&amp;token=099193aa-4d85-4e22-8eb7-55f12a235fe2" alt="book" ></img>
</figure>
<div className='recommended__book--title'>How To Win Friends And Influence People In The Digital Age</div>
<div className='recommended__book--author'>Dale Carnegie</div>
<div className='recommended__book--sub-title'>Time-Tested Advice For The Digital Age</div>
<div className='recommended__book--details-wrapper'>
<div className='recommended__book--details'>
<div className='recommended__book--details-icon'>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className='recommended__book--details-text'>
03:24
</div>
</div>
<div className='recommended__book--details'>
<div className='recommended__book--details-icon'>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className='recommended__book--details-text'>4.4</div>
</div>
</div>
</a>


<a className="for-you__recommended--books-link" href="/book/2l0idxm1rvw">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fcan't-hurt-me.mp3?alt=media&amp;token=7de57406-60ca-49d6-9113-857507f48312"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&amp;token=026646b0-40f8-48c4-8d32-b69bd5b8f700" alt="book" />
</figure>
<div className="recommended__book--title">Can’t Hurt Me</div>
<div className="recommended__book--author">David Goggins</div>
<div className="recommended__book--sub-title">Master Your Mind and Defy the Odds</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">04:52</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.2</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/4t0amyb4upc">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fmastery.mp3?alt=media&amp;token=364b7c19-e9b1-4084-be0d-3a9cb5367098"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fmastery.png?alt=media&amp;token=c41aac74-9887-4536-9478-93cd983892af" alt="book" />
</figure>
<div className="recommended__book--title">Mastery</div><div className="recommended__book--author">Robert Greene</div>
<div className="recommended__book--sub-title">Myths about genius and what it really means to be great</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">04:40</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/g2tdej27d23">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fatomic-habits.mp3?alt=media&amp;token=e9bd4ea8-044a-4c73-acac-1228e3bc50b6"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fatomic_habits.png?alt=media&amp;token=51401979-e7cc-40c4-87fa-3b27d1fe761b" alt="book" />
</figure>
<div className="recommended__book--title">Atomic Habits</div>
<div className="recommended__book--author">James Clear</div>
<div className="recommended__book--sub-title">An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:24</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/18tro3gle2p">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fhow-to-talk-to-anyone.mp3?alt=media&amp;token=30173e56-fbe6-4162-8184-64d24dc480ac"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fhow-to-talk-to-anyone.png?alt=media&amp;token=48f77463-a093-42b4-8f1f-82fa4edd044c" alt="book" />
</figure>
<div className="recommended__book--title">How to Talk to Anyone</div>
<div className="recommended__book--author">Leil Lowndes</div>
<div className="recommended__book--sub-title">92 Little Tricks for Big Success in Relationships</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:22</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.6</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/ap153fptaq">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fgood-to-great.mp3?alt=media&amp;token=c1b30865-26f7-47c5-a0f3-fd9da5d3da3d"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fgood-to-great.png?alt=media&amp;token=b906ec52-7871-411f-b5b6-53f1da98ee27" alt="book"/>
</figure>
<div className="recommended__book--title">Jim Collins</div>
<div className="recommended__book--author">Good to Great</div>
<div className="recommended__book--sub-title">Why Some Companies Make the Leap...And Others Don't</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:01</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.5</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/2ozpy1q1pbt">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-intelligent-investor.mp3?alt=media&amp;token=82429bb8-8af4-4375-bca5-e6f89e631fca"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-intelligent-investor.png?alt=media&amp;token=f72f1865-de93-4c67-bd6e-55070f467923" alt="book" />
</figure>
<div className="recommended__book--title">The Intelligent Investor</div>
<div className="recommended__book--author">Benjamin Graham</div>
<div className="recommended__book--sub-title">The Definitive Book on Value Investing</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">02:48</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.8</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/cuolx5oryy8">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-4-day-week.mp3?alt=media&amp;token=6265f7a5-1dab-422d-8d22-71cdb70678a1"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-4-day-week.png?alt=media&amp;token=8f468ea2-f16c-4a96-9bc3-8f66aaff33ec" alt="book" />
</figure>
<div className="recommended__book--title">The 4 Day Week</div>
<div className="recommended__book--author">Andrew Barnes</div>
<div className="recommended__book--sub-title">How the flexible work revolution can increase productivity, profitability, and wellbeing, and help create a sustainable future</div>
<div className="recommended__book--details-wrapper">
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">02:20</div>
</div>
<div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.6</div>
</div>
</div>
</a>

</div>
</div>
<div>
<div className='for-you__title'>Suggested Books</div>
<div className='for-you__sub--title'>Browse These Books</div>
<div className='for-you__recommended--books'>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fzero-to-one.png?alt=media&amp;token=0c64bbe6-4e9e-4a0e-adc9-9e218dd12402" alt="book" />
</figure>
<div className="recommended__book--title">Zero to One</div>
<div className="recommended__book--author">Peter Thiel with Blake Masters</div>
<div className="recommended__book--sub-title">Notes on Startups, or How to Build The Future</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:24</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Frich-dad-poor-dad.png?alt=media&amp;token=dc226e0c-fd89-4897-9605-9603e04a9966" alt="book" />
</figure>
<div className="recommended__book--title">Rich Dad, Poor Dad</div>
<div className="recommended__book--author">Robert T. Kiyosaki</div>
<div className="recommended__book--sub-title">What The Rich Teach Their Kids About Money - That The Poor And The Middle Class Do Not!</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">05:38</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.5</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-10x-rule.png?alt=media&amp;token=1e766af7-97ec-4bb8-969f-95ca35cf1d68" alt="book" />
</figure>
<div className="recommended__book--title">THE 10X RULE</div>
<div className="recommended__book--author">Grant Cardone</div>
<div className="recommended__book--sub-title">The Only Difference Between Success And Failure</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:18</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fdeep-work.png?alt=media&amp;token=3a857c13-f374-4c82-b134-fef5a01c202e" alt="book" />
</figure>
<div className="recommended__book--title">Deep Work</div>
<div className="recommended__book--author">Cal Newport</div>
<div className="recommended__book--sub-title">Rules For Focused Success In A Distracted World</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">02:50</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-five-second-rule.png?alt=media&amp;token=8d6d24fd-11c8-425d-b7f0-3ae1499192db" alt="book" />
</figure>
<div className="recommended__book--title">The 5 Second Rule</div>
<div className="recommended__book--author">Mel Robbins</div>
<div className="recommended__book--sub-title">Transform Your Life, Work, And Confidence With Everyday Courage</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">02:45</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-twelve-week-year.png?alt=media&amp;token=e6c87df7-f57c-4026-b364-9ba05541b438" alt="book" />
</figure>
<div className="recommended__book--title">The 12 Week Year</div>
<div className="recommended__book--author">Brian P. Moran And Michael Lennington</div>
<div className="recommended__book--sub-title">Get More Done In 12 Weeks Than Others Do In 12 Months</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">03:36</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.6</div>
</div>
</div>
</a>
<a className="for-you__recommended--books-link" href="/book/6ncszvwbl4e">
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fzero-to-one.mp3?alt=media&amp;token=29494cf2-2c9e-404a-bb76-c4fb2a23d8f2"></audio>
<figure className="book__image--wrapper" >
<img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fgetting-things-done.png?alt=media&amp;token=b1d71920-25fd-4b8b-ad2b-7652f27b4cbc" alt="book" />
</figure>
<div className="recommended__book--title">Getting Things Done</div>
<div className="recommended__book--author">David Allen</div>
<div className="recommended__book--sub-title">The Art Of Stress-Free Productivity</div>
<div className="recommended__book--details-wrapper"><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
</div>
<div className="recommended__book--details-text">02:24</div>
</div><div className="recommended__book--details">
<div className="recommended__book--details-icon">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
</div>
<div className="recommended__book--details-text">4.3</div>
</div>
</div>
</a>

</div>
</div>

</div>
</div>

</section>
    
)
}


