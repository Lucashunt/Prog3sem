import axios from "axios";
import TeamCard from "../../comps/team";
import PlayersCard from "../../comps/PlayerCard";
import Image from "next/image";
import {
  arsenal,
  chelsea,
  everton,
  liverpool,
  astonvilla,
  bournemouth,
  brentford,
  brighton,
  chrystalpalace,
  fulham,
  leeds,
  leicester,
  manC,
  manU,
  newcastle,
  southhampton,
  tottenham,
  westham,
  wolves,
  nottforrest,
} from "../../public/index.js";


export async function getServerSideProps({query}) {
    const teamQuery = query.team

    const matches = []

    const response = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = response.data.teams.find((team) => team.id === parseInt(teamQuery))
    const dataPlayers = response.data.elements.filter((player) => player.team === parseInt(teamQuery))

    
    
    const responseFixtures = await axios.get(`https://fantasy.premierleague.com/api/fixtures/`);
    const dataFixtures = responseFixtures.data;

    for (let i = 0; i < dataFixtures.length; i++) {
        if (dataFixtures[i].finished === true ) {
            if (dataFixtures[i].team_h === parseInt(teamQuery) || dataFixtures[i].team_a === parseInt(teamQuery)){
            matches.push(dataFixtures[i])
            }
        }

        }

      

    return {
        props: {data, matches, teamQuery, dataPlayers}, // will be passed to the page component as props
      }  
}


export default function Team({data, matches, teamQuery, dataPlayers}) {

  const teams = [
    {
      name: "Arsenal",
      image: arsenal,
      id: 1,
    },
    {
      name: "Aston Villa",
      image: astonvilla,
      id: 2,
    },
    {
      name: "Bournemouth",
      image: bournemouth,
      id: 3,
    },
    {
      name: "Brentford",
      image: brentford,
      id: 4,
    },
    {
      name: "Brighton",
      image: brighton,
      id: 5,
    },
    {
      name: "Chelsea",
      image: chelsea,
      id: 6,
    },
    {
      name: "Crystal Palace",
      image: chrystalpalace,
      id: 7,
    },
    {
      name: "Everton",
      image: everton,
      id: 8,
    },
    {
      name: "Fulham",
      image: fulham,
      id: 9,
    },
    {
      name: "Leicester",
      image: leicester,
      id: 10,
    },
    {
      name: "Leeds",
      image: leeds,
      id: 11,
    },
    {
      name: "Liverpool",
      image: liverpool,
      id: 12,
    },
    {
      name: "Manchester City",
      image: manC,
      id: 13,
    },
    {
      name: "Manchester United",
      image: manU,
      id: 14,
    },
    {
      name: "Newcastle",
      image: newcastle,
      id: 15,
    },
    {
      name: "Nottingham Forest",
      image: nottforrest,
      id: 16,
    },
    {
      name: "Southampton",
      image: southhampton,
      id: 17,
    },
    {
      name: "Spurs",
      image: tottenham,
      id: 18,
    },
    {
      name: "West Ham",
      image: westham,
      id: 19,
    },
    {
      name: "Wolves",
      image: wolves,
      id: 20,
    },
  ];

    return (
        <div className="mx-20 mb-20">
            <h1 className="text-6xl text-center text-orange-500 uppercase font-bold tracking-wider my-20">
              <div><Image src={teams[data.id-1].image} width={100} height={100}/></div>
              <div>{data.name}</div>
              </h1>
            <div className="grid sm:grid-cols-2 gap-20">
            <div className="">
        <div className="">
      <div className="overflow-x-auto relative shadow-2xl rounded-2xl">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-blue-500 text-white  ">
            <tr className="">
              <th className="py-3 px-4">Dato</th>
              <th className="py-3 px-4">Hjemme</th>
              <th className="py-3 px-4">Ude</th>
              <th className="py-3 px-4">Stilling</th>
              
   
            </tr>
          </thead>

          <tbody className="">
            <TeamCard matches={matches} team={teamQuery}/>
            
          </tbody>
        </table>
      </div>
      </div>
      </div>

                <div className="shadow-2xl rounded-2xl">
                    <h3 className="text-2xl bg-blue-500 text-white rounded-t-2xl py-1 text-center flex justify-center items-center">FPL STATS</h3>
                    <div className="m-20">
                        <div className="grid grid-cols-4 text-lg gap-5 ">
        <div className=" col-span-3 border-b">Navn</div><div className="border-b">{data.name}</div>
        <div className="border-b col-span-3">Styrke</div><div className="border-b">{data.strength}</div>
        <div className="border-b col-span-3">Styrke hjemme</div ><div className="border-b">{data.strength_overall_home}</div>
        <div className="border-b col-span-3">Styrke ude</div><div className="border-b">{data.strength_overall_away}</div>
        <div className="border-b col-span-3">Styrke angreb hjemme</div><div className="border-b">{data.strength_attack_home}</div>
        <div className="border-b col-span-3">Styrke angreb ude</div><div className="border-b">{data.strength_attack_away}</div>
        <div className="border-b col-span-3">Styrke forsvar hjemme</div><div className="border-b">{data.strength_defence_home}</div>
        <div className="border-b col-span-3">Styrke forsvar ude</div><div className="border-b">{data.strength_defence_away}</div>
        </div>
        </div>
        </div>
        


        

    
        </div>
        <div className="shadow-2xl rounded-2xl my-20">
      <h3 className="text-2xl bg-blue-500 text-white rounded-t-2xl py-1 text-center flex justify-center items-center">SPILLERE</h3>
      <div className="m-20 pb-20">
        <PlayersCard players={dataPlayers} />
        </div>
      </div>
        </div>
    )
}


