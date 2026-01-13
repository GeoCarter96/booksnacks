'use client'
import OneBook from "@/components/MappedAPI/onebook";
import { useEffect, useState } from "react";

export default function SelectedBook({status}: {status: 'selected'}) {
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
                  <OneBook key={book.id} book={book}/>  
                  
                    ))}
               </>
  )
}
