import React from 'react'



//BookClient page
export default async function getOneBook(id: string) {
    const res = await fetch (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
  console.log(await res.text());
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const books: Books[] = await res.json()

  return (
    <div></div>
  )
 
  
  
}
