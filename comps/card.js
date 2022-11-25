import { useState } from "react";
import { IoMdFootball } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import arsenal from "../public/arsenal.png";
import chelsea from "../public/chelsea.png";
import everton from "../public/everton.png";
import liverpool from "../public/liverpool.png";
import astonvilla from "../public/astonvilla.png";
import bournemouth from "../public/bournemouth.png";
import brentford from "../public/brentford.png";
import brighton from "../public/brighton.png";
import chrystalpalace from "../public/chrystalpalace.png";
import fulham from "../public/fulham.png";
import leeds from "../public/leeds.png";
import leicester from "../public/leicester.png";
import manC from "../public/manC.png";
import manU from "../public/manU.png";
import newcastle from "../public/newcastle.png";
import southhampton from "../public/southhampton.png";
import tottenham from "../public/tottenham.png";
import westham from "../public/westham.png";
import wolves from "../public/wolves.png";
import nottforrest from "../public/nottforrest.png";

export default function Card({ gameweek }) {
  gameweek.sort(function(a, b) {
    var c = new Date(a.time);
    var d = new Date(b.time);
    return c-d;
});  
  
  return Array.isArray(gameweek)
    ? gameweek.map((game) => (
        <CardGameweek
          gameID={game.gameID}
          hometeam={game.hometeam}
          awayteam={game.awayteam}
          hometeamGoals={game.hometeamGoals}
          awayteamGoals={game.awayteamGoals}
          time={new Date(game.time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
          date={new Date(game.time).toLocaleDateString([], { month: 'numeric', day: 'numeric' })}
          gameweek={game.gameweek}
          dateLong={new Date(game.time).toLocaleDateString([], { month: 'long', day: 'numeric' })}
        />
      ))
    : null;
}

const CardGameweek = ({
  gameID,
  hometeam,
  awayteam,
  hometeamGoals,
  awayteamGoals,
  time,
  gameweek,
  date,
  dateLong
}) => {



  const teamsAway = {
    1: (
      <div className="flex justify-center items-center">
        <Image src={arsenal} width={40} height={40} />
        <h3 className="ml-2">Arsenal</h3>{" "}
      </div>
    ),
    2: (
      <div className="flex justify-center items-center">
        <Image src={astonvilla} width={40} height={40} />
        <h3 className="ml-2">Aston Villa</h3>{" "}
      </div>
    ),
    3: (
      <div className="flex justify-center items-center">
        <Image src={bournemouth} width={40} height={40} />
        <h3 className="ml-2">Bournemouth</h3>{" "}
      </div>
    ),
    4: (
      <div className="flex justify-center items-center">
        <Image src={brentford} width={40} height={40} />
        <h3 className="ml-2">Brentford</h3>{" "}
      </div>
    ),
    5: (
      <div className="flex justify-center items-center">
        <Image src={brighton} width={40} height={40} />
        <h3 className="ml-2">Brighton</h3>{" "}
      </div>
    ),
    6: (
      <div className="flex justify-center items-center">
        <Image src={chelsea} width={40} height={40} />
        <h3 className="ml-2">Chelsea</h3>{" "}
      </div>
    ),
    7: (
      <div className="flex justify-center items-center">
        <Image src={chrystalpalace} width={40} height={40} />
        <h3 className="ml-2">Chrystal Palace</h3>{" "}
      </div>
    ),
    8: (
      <div className="flex justify-center items-center">
        <Image src={everton} width={40} height={40} />
        <h3 className="ml-2">Everton</h3>{" "}
      </div>
    ),
    9: (
      <div className="flex justify-center items-center">
        <Image src={fulham} width={40} height={40} />
        <h3 className="ml-2">Fulham</h3>{" "}
      </div>
    ),
    10: (
      <div className="flex justify-center items-center">
        <Image src={leicester} width={40} height={40} />
        <h3 className="ml-2">Leicester</h3>{" "}
      </div>
    ),
    11: (
      <div className="flex justify-center items-center">
        <Image src={leeds} width={40} height={40} />
        <h3 className="ml-2">Leeds</h3>{" "}
      </div>
    ),
    12: (
      <div className="flex justify-center items-center">
        <Image src={liverpool} width={40} height={40} />
        <h3 className="ml-2">Liverpool</h3>{" "}
      </div>
    ),
    13: (
      <div className="flex justify-center items-center">
        <Image src={manC} width={40} height={40} />
        <h3 className="ml-2">Man City</h3>{" "}
      </div>
    ),
    14: (
      <div className="flex justify-center items-center">
        <Image src={manU} width={40} height={40} />
        <h3 className="ml-2">Man Utd</h3>{" "}
      </div>
    ),
    15: (
      <div className="flex justify-center items-center">
        <Image src={newcastle} width={40} height={40} />
        <h3 className="ml-2">Newcastle</h3>{" "}
      </div>
    ),
    16: (
      <div className="flex justify-center items-center">
        <Image src={nottforrest} width={40} height={40} />
        <h3 className="ml-2">Nott&apos;m Forest</h3>{" "}
      </div>
    ),
    17: (
      <div className="flex justify-center items-center">
        <Image src={southhampton} width={40} height={40} />
        <h3 className="ml-2">Southhampton</h3>{" "}
      </div>
    ),
    18: (
      <div className="flex justify-center items-center">
        <Image src={tottenham} width={40} height={40} />
        <h3 className="ml-2">Spurs</h3>{" "}
      </div>
    ),
    19: (
      <div className="flex justify-center items-center">
        <Image src={westham} width={40} height={40} />
        <h3 className="ml-2">West Ham</h3>{" "}
      </div>
    ),
    20: (
      <div className="flex justify-center items-center">
        <Image src={wolves} width={40} height={40} />
        <h3 className="ml-2">Wolves</h3>{" "}
      </div>
    ),
  };

  const teamsHome = {
    1: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Arsenal</h3>{" "}
        <Image src={arsenal} width={40} height={40} />
      </div>
    ),
    2: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Aston Villa</h3>
        <Image src={astonvilla} width={40} height={40} />{" "}
      </div>
    ),
    3: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Bournemouth</h3>
        <Image src={bournemouth} width={40} height={40} />{" "}
      </div>
    ),
    4: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Brentford</h3>
        <Image src={brentford} width={40} height={40} />{" "}
      </div>
    ),
    5: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Brighton</h3>
        <Image src={brighton} width={40} height={40} />{" "}
      </div>
    ),
    6: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Chelsea</h3>{" "}
        <Image src={chelsea} width={40} height={40} />
      </div>
    ),
    7: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Chrystal Palace</h3>
        <Image src={chrystalpalace} width={40} height={40} />{" "}
      </div>
    ),
    8: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Everton</h3>
        <Image src={everton} width={40} height={40} />{" "}
      </div>
    ),
    9: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Fulham</h3>
        <Image src={fulham} width={40} height={40} />{" "}
      </div>
    ),
    10: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Leicester</h3>
        <Image src={leicester} width={40} height={40} />{" "}
      </div>
    ),
    11: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Leeds</h3>
        <Image src={leeds} width={40} height={40} />{" "}
      </div>
    ),
    12: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Liverpool</h3>
        <Image src={liverpool} width={40} height={40} />{" "}
      </div>
    ),
    13: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Man City</h3>
        <Image src={manC} width={40} height={40} />{" "}
      </div>
    ),
    14: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Man Utd</h3>
        <Image src={manU} width={40} height={40} />{" "}
      </div>
    ),
    15: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Newcastle</h3>
        <Image src={newcastle} width={40} height={40} />{" "}
      </div>
    ),
    16: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Nott&apos;m Forest</h3>
        <Image src={nottforrest} width={40} height={40} />{" "}
      </div>
    ),
    17: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Southhampton</h3>
        <Image src={southhampton} width={40} height={40} />{" "}
      </div>
    ),
    18: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Spurs</h3>
        <Image src={tottenham} width={40} height={40} />{" "}
      </div>
    ),
    19: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">West Ham</h3>
        <Image src={westham} width={40} height={40} />{" "}
      </div>
    ),
    20: (
      <div className="flex justify-center items-center">
        <h3 className="mr-2">Wolves</h3>
        <Image src={wolves} width={40} height={40} />{" "}
      </div>
    ),
  };

  const options = { month: 'numeric', day: 'numeric'}
  
  let today = new Date().toLocaleDateString('de-DE', options)

  
  date + '.' === today ? date = 'I dag' 
  : parseInt(date) - 1 === parseInt(today) ? date = 'I morgen'
  : parseInt(date) + 1 === parseInt(today) ? date = 'I går'
  : date = dateLong

  const goals = <div className="font-bold">{hometeamGoals} - {awayteamGoals}</div>
  return (
    <>
      
        <div
          className="bg-blue-500  text-white 2xl:text-2xl  hover:bg-blue-500/80 rounded-md lg:text-lg flex flex-col h-full"
        >
          <Link href={`/match/${gameID}?hometeam=${hometeam}&awayteam=${awayteam}&hometeamGoals=${hometeamGoals}&awayteamGoals=${awayteamGoals}&date=${date}&time=${time}&gameweek=${gameweek}&dateLong=${dateLong}`}><a>
          <div className="p-10">
            <div className=" text-base mb-5 text-center font-bold">{date}</div>
            <div className="grid grid-cols-3">
              <div className="flex justify-end  items-center">
                {teamsHome[hometeam]}
              </div>
              <div className="flex justify-center items-center">
                {hometeamGoals > 0 ? goals : null }
                {hometeamGoals === 0 ? goals : null }
                {hometeamGoals === null ? <div className="font-bold">{time}</div> : null }
              </div>
              <div className="flex justify-start items-center">
              {teamsAway[awayteam]}
              </div>
            </div>
          </div>
           
            </a></Link>
           
          </div>      
      
     
    </>
  );
};

