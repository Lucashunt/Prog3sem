import axios from "axios";
import Image from "next/image";
import Link from "next/link.js";
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

import { IoMdFootball } from "react-icons/io";

export async function getServerSideProps({ query }) {
  const {
    hometeam,
    awayteam,
    hometeamGoals,
    awayteamGoals,
    date,
    time,
    gameweek,
    dateLong
  } = query;
  const gameID = query.match;

  const responsePlayers = await axios.get(
    "https://fantasy.premierleague.com/api/bootstrap-static/"
  );
  const dataPlayers = responsePlayers.data.elements;

  const response = await axios.get(
    `https://fantasy.premierleague.com/api/fixtures/?event=${gameweek}`
  );
  const data = response.data;
  const game = data.find((game) => game.id === parseInt(gameID));

  const goals = game.stats.filter((stat) => stat.identifier == "goals_scored");

 
  let match = []

  if (goals.length > 0) {
  for (let i = 0; i < goals[0].a.length; i++) {
    match.push({
      playerHome:
        dataPlayers.filter((player) => player.id === goals[0].a[i].element)[0]
          .first_name +
        " " +
        dataPlayers.filter((player) => player.id === goals[0].a[i].element)[0]
          .second_name,
      timesHome: parseInt(goals[0].a[i].value),
      playerHomeID: dataPlayers.filter(
        (player) => player.id === goals[0].a[i].element
      )[0].id,
    });
  }

  for (let i = 0; i < goals[0].h.length; i++) {
    match.push({
      playerAway:
        dataPlayers.filter((player) => player.id === goals[0].h[i].element)[0]
          .first_name +
        " " +
        dataPlayers.filter((player) => player.id === goals[0].h[i].element)[0]
          .second_name,
      timesAway: parseInt(goals[0].h[i].value),
      playerAwayID: dataPlayers.filter(
        (player) => player.id === goals[0].h[i].element
      )[0].id,
    });
  }
  }
  return {
    props: {
      
      hometeam,
      awayteam,
      hometeamGoals,
      awayteamGoals,
      date,
      time,
      match,
      dateLong
    }, // will be passed to the page component as props
  };
}

export default function Match({

  hometeam,
  awayteam,
  hometeamGoals,
  awayteamGoals,
  date,
  time,
  match,
  dateLong
}) {
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
  
  const options = { month: 'numeric', day: 'numeric'}
  
  let today = new Date().toLocaleDateString('de-DE', options)

  
  date + '.' === today ? date = 'I dag' 
  : parseInt(date) - 1 === parseInt(today) ? date = 'I morgen'
  : parseInt(date) + 1 === parseInt(today) ? date = 'I går'
  : date = dateLong

  


  return (
    <div className="mx-20 my-10">
      <div className="grid grid-cols-5 bg-blue-600 text-white py-10 rounded-t-lg text-2xl">
        <div className="flex justify-end items-center col-span-2">
        <div className="mr-5"> <Link href={`/team/${hometeam}`}><a className="hover:text-gray-300">{teams[parseInt(hometeam) - 1].name}</a></Link></div>{" "}
        <div>
          <Image
            src={teams[parseInt(hometeam) - 1].image}
            width={60}
            height={60}
          />
        </div>
        </div>
        <div className=" text-lg flex flex-col items-center justify-center font-extrabold col-span-1">
          
         {match.length > 0  ?  <div className="text-6xl"> {hometeamGoals} - {awayteamGoals} </div> : null}
         {match.length > 0  ?  <div className="font-normal mt-2">{date}</div> : null}
         
        
         {match.length === 0  ?  <div className="text-5xl font-bold">{time}</div>  : null}
         {match.length === 0  ?  <div className="text-2xl mt-2 font-light">{date}</div>  : null}


        </div>{" "}
        <div className="flex justify-start items-center col-span-2">
        <div>
          <Image
            src={teams[parseInt(awayteam) - 1].image}
            width={60}
            height={60}
          />
        </div>
        <div className="ml-5"><Link href={`/team/${awayteam}`}><a className="hover:text-gray-300">{teams[parseInt(awayteam) - 1].name}</a></Link></div>
        </div>
      </div>

<div className="grid grid-cols-2  border border-blue-500 py-8 rounded-b-lg bg-slate-50">
  <div className="flex justify-center border-r border-black">
      <div>
        {match.length > 0
          ? match.map((player) => {
              return (
                <>
                <div className="grid grid-cols-3 gap-10">
                  
                  <div className=" col-span-2 flex justify-end items-center"><Link href={`/player/${player.playerAwayID}`}><a className="hover:text-blue-600">{player.playerAway}</a></Link></div>
                  <div className="flex items-center">
                  {Array.from({ length: player.timesAway }, (v, i) => i).map((item) => {
        return <IoMdFootball key={item} className="w-5 h-5" />;
      })}
      </div>
                  </div>
                 
                </>
              );
            })
          : null}
      </div>
      </div>

      <div className="flex justify-center">
      
      
      <div className="">
        {match.length > 0
          ? match.map((player) => {
              return (
                <>
                <div className="grid grid-cols-3 gap-10">
                  <div className="flex justify-end items-center">
                {Array.from({ length: player.timesHome }, (v, i) => i).map((item) => {
        return <IoMdFootball className="w-5 h-5" />;
      })}
      </div>
                  <div className="flex justify-start cols-span-2 items-center"><Link href={`/player/${player.playerHomeID}`}><a className="hover:text-blue-600">{player.playerHome}</a></Link></div>
                  

                  </div>
                </>
              );
            })
          : null}
      </div>
      </div>
      </div>
    </div>
  );
}
