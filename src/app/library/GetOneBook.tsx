import React from 'react'



//BookClient page
export default async function GetOneBook(id: string) {
    const res = await fetch (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
  
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const books: Book[] = await res.json()

  return (
    <></>
  )
 
  
  
}
