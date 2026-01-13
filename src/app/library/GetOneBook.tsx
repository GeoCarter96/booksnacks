
import SingleBook from "@/components/MappedAPI/singlebook";
import Player from "@/components/MappedAPI/player";











export default async function GetOneBook( { id }: {id : string}) {
    const res = await fetch (`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`)
  
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const text = await res.text();
    
    if (!text) {
      return <div>No book data available</div>;
    }
    
    let book: Book;
    try {
      book = JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON:', text);
      return <div>Error loading book data</div>;
    }
    
    if (!book) {
      return <div>Book not found</div>;
    }
  return (
    <>
    <> <SingleBook book={book} /> </>
    <><Player book={book}/></>
    </>
  )
 
  
  
}