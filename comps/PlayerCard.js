import Image from "next/image";
import Link from "next/link";

export default function PlayerCard ({players}) {
    players.sort((a, b) =>  a.element_type - b.element_type)

  
    return (
        <div>
            <h3 className=" font-light text-lg mb-2">Målmænd</h3>
           
            <div className="grid  mb-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
           
                {Array.isArray(players) ? players.map((player) => (
                <>
                    {player.element_type === 1 ? 
                    <Table
                    name={player.first_name + " " + player.second_name}
                    image={parseInt(player.photo)}
                    id={player.id}
                    
                    />
                    : null
                }
                </>
                )) : null}
            
            </div>
            <h3 className=" font-light text-lg mb-2">Forsvar</h3>
            
            
            <div className="grid  mb-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {Array.isArray(players) ? players.map((player) => (
                <>
                    {player.element_type === 2 ? 
                    <Table
                    name={player.first_name + " " + player.second_name}
                    image={parseInt(player.photo)}
                    id={player.id}
                    
                    />
                    : null
                }
                </>
                )) : null}
</div>

<h3 className=" font-light text-lg mb-2">Midtbane</h3>

<div className="grid  mb-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {Array.isArray(players) ? players.map((player) => (
                <>
                    {player.element_type === 3 ? 
                    <Table
                    name={player.first_name + " " + player.second_name}
                    image={parseInt(player.photo)}
                    id={player.id}
                    
                    />
                    : null
                }
                </>
                )) : null}
                </div>
                
                <h3 className=" font-light text-lg mb-2">Angreb</h3>
                <div className="grid  mb-10 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">

            {Array.isArray(players) ? players.map((player) => (
                <>
                    {player.element_type === 4 ? 
                    <Table
                    name={player.first_name + " " + player.second_name}
                    image={parseInt(player.photo)}
                    id={player.id}
                    
                    />
                    : null
                }
                </>
                )) : null}
                </div>



    </div>
    )

    
}


const Table = ({name, image, id}) => {

console.log(image)
    return (
        <Link href={`/player/${id}`}><a>
        <div className="flex px-5 py-2 border rounded-lg items-center m-1 hover:bg-gray-100"> 
                
         
                        <div className="mr-5">
            <Image src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${image}.png`} width={47} height={60} alt="Image" />
            </div>
            <div>{name}</div>
            
        </div>
        </a></Link>
    )}