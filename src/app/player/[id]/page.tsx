import PlayerBook from '@/app/library/PlayerBook';
import './player.css'


export default async function Player({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return (
    <div>
      <PlayerBook id={id}  />
    </div>
  );
}
