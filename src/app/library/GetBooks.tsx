'use client'
import { useEffect, useState } from "react";

import Book from "@/components/book";



export default  function GetBooks({status}: {status: 'recommended' | 'suggested'}) {
  console.log ('status:', status)
    const [books, setBooks] = useState<Book[] | null>(null);
    useEffect(() => {
    const fetchBooks = async () => {
   const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=${status}`)
    
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const books: Book[] = await res.json()
    setBooks(books)
    }

   
        fetchBooks();
    },[])
    return (
        
            <>
              {books?.map(book => (
               <Book key={book.id} book={book}/>  
                 ))}
            </>

    )
}

