import  Link  from 'next/link'
import './foryou.css'
import GetBooks from '../library/GetBooks';
import SelectedBook from '../library/SelectedBook';







 

  export default  function ForYou () {
    
   
return(
<div>
 
<div className='row'>
<div className='container'>
<div className='for-you__wrapper'>
<div className='for-you__title'>Selected Just For You</div>
<audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>

 <SelectedBook status='selected'/>

<div>
<div className='for-you__title'>Recommended For You</div>
</div>
<div className='for-you__sub--title'>We Think You'll Like These</div>
<div className='for-you__recommended--books'>
  <GetBooks status='recommended'/>
</div>
</div>
<div>
<div className='for-you__title'>Suggested Books</div>
<div className='for-you__sub--title'>Browse These Books</div>
<div className='for-you__recommended--books'>
  <GetBooks status='suggested'/>
</div>
</div>

</div>
</div>

</div>
    
)
}


