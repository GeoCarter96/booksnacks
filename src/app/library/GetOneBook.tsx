
import SingleBook from "@/components/MappedAPI/singlebook";
import Player from "@/components/MappedAPI/player";











export default async function GetOneBook( { id, player }: { id: string; player?: string }) {
     const url = `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}${player ? `&player=${player}` : ''}`;
  
  const res = await fetch(url);
  
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  
  const text = await res.text();
  if (!text) return <div>No book data available</div>;
  
  const book: Book = JSON.parse(text);
  return (
    <>
    <> <SingleBook book={book} /> </>
    <>{book.audioLink && <Player book={book}/>}</>
    </>
  )
 
  
  
}