import Player from "@/components/MappedAPI/player";





export default async function PlayerBook( { id }: { id: string; }) {
     const url = `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`;
  
  const res = await fetch(url);
  
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  
  const text = await res.text();
  if (!text) return <div>No book data available</div>;
  
  const book: Book = JSON.parse(text);
  return (
    <>
    <> <Player book={book} /> </>
    
    </>
  )
 
  
  
}