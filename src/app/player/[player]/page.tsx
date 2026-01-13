import GetOneBook from "@/app/library/GetOneBook";
import './player.css'

export default async function Player({ 
  params 
}: { 
  params: Promise<{ player: string }> 
}) {
  const { player } = await params;
  
  return (
    <div>
      <GetOneBook id={player} player="audio" />
    </div>
  );
}
