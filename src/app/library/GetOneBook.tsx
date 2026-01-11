'use client'
import SingleBook from "@/components/MappedAPI/singlebook";
import { useEffect, useState } from "react";





export default async function GetOneBook( { id }: {id : string}) {
  const [books, setBooks] = useState<Book[] | null>(null);
  useEffect(() => {
        const fetchBooks = async () => {
    const res = await fetch (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`, {
      cache: 'no-store'
    })
  
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const data = await res.json()
     setBooks(books)
console.log("API RAW DATA:", data); }
fetchBooks();
        },[])
    const book = Array.isArray(books) ? books[0] : books;


    if (!book || Object.keys(book).length === 0) {
      return <div> No book found</div>
    }
    

  return (
     <>
                 {books?.map(book => (
 <SingleBook book={book} /> 
 ))}
               </>
  )
 
  
  
}
