import Book from '@/components/MappedAPI/book';





export default async function GetOneBook( { id }: {id : string}) {
    const res = await fetch (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
  
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const books: Book[] = await res.json()

  return (
    <> <Book book={books[0]} /> </>
  )
 
  
  
}
