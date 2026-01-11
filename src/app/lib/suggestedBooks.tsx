import ForYou from "../for-you/page";


//for-you page
export default async function suggestedBooks() {
    const res = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested')
    console.log(await res.text());
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const books: Books[] = await res.json()
 
  return (
    <div>
      {books?.map(book => (
                     book && <ForYou key={book.id} book={book}/>  
                       ))}
    </div>
  )
}
