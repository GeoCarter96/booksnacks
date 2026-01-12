import './book.css'





import GetOneBook from "@/app/library/GetOneBook";

export default async function BookClient({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return (
    <div>
      <GetOneBook id={id} />
    </div>
  );
}

