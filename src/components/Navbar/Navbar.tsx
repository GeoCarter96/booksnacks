"use client"
import { useState, useEffect} from 'react'
import './Navbar.css'
import Link from 'next/link'
import { useSidebarStore } from '@/store/useSidebarStore'


interface Book {
  id: string;
  title: string;
  author: string;
  imageLink: string;
}

const Navbar = ({ book }: { book?: Book }) => {
const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]); 
  
  const [loading, setLoading] = useState(false);
  
const toggle = useSidebarStore((state) => state.toggleSidebar);
   useEffect(() => {
  
    if (query.length < 3) {
      setResults([]);
      return;
    }
    

 
    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`
        );
        const data = await response.json();
          setResults(Array.isArray(data) ? data : data.books || []);
      } catch (error) {
        console.error("Search Error:", error);
      } finally {
        setLoading(false);
      }
    }, 500);

   
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
<div>
  <div id='__next'>
  <div className='wrapper'>
    <div className='search__background'>
<div className='search__wrapper'>
<figure>

</figure>
<div className='search__content'>
<div className='search'>
<div className='search__input--wrapper'>
<input className='search__input' placeholder='Search For Books' type='text' value={query} onChange={(e) => setQuery(e.target.value)}></input>
<div className='search__icon'>
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
</div>
</div>
  
       
      
{results.length > 0 && (
  <div className="search-dropdown">
    {results.map((item) => (
      <Link href={`/player/${item?.id}`} key={item?.id} className="search-item">
        <img src={item?.imageLink} alt={item?.title} className="search-item-img" />
        <div className="search-item-info">
          <div className="search-item-title">{item?.title}</div>
          <div className="search-item-author">{item?.author}</div>
        </div>
      </Link>
    ))}
  </div>
)}
        
<div className='sidebar__toggle--btn' onClick={toggle}>
<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Navbar
