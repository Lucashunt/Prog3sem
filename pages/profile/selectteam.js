import Image from "next/image";
import Link from "next/link";
import PocketBase from 'pocketbase';
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
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import AuthContext from "../../lib/AuthContext.js";

export default function SelectTeam() {
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
  const { user } = useContext(AuthContext);
  
  const teamsID = {
    Arsenal: 1,
  
    "Aston Villa": 2,
  
    Bournemouth: 3,
  
    Brentford: 4,
  
    Brighton: 5,
  
    Chelsea: 6,
  
    "Crystal Palace": 7,
  
    Everton: 8,
  
    Fulham: 9,
  
    Leicester: 10,
  
    Leeds: 11,
  
    Liverpool: 12,
  
    "Manchester City": 13,
  
    "Manchester United": 14,
  
    Newcastle: 15,
  
    "Nottingham Forest": 16,
  
    Southampton: 17,
  
    Tottenham: 18,
  
    "West Ham": 19,
  
    Wolves: 20,
  };

  const teams = [
    {
      name: "Arsenal",
      image: arsenal,
      id: 1,
    },
    {
      name: "Chelsea",
      image: chelsea,
      id: 2,
    },
    {
      name: "Everton",
      image: everton,
      id: 3,
    },
    {
      name: "Liverpool",
      image: liverpool,
      id: 4,
    },
    {
      name: "Aston Villa",
      image: astonvilla,
      id: 5,
    },
    {
      name: "Bournemouth",
      image: bournemouth,
      id: 6,
    },
    {
      name: "Brentford",
      image: brentford,
      id: 7,
    },
    {
      name: "Brighton",
      image: brighton,
      id: 8,
    },
    {
      name: "Crystal Palace",
      image: chrystalpalace,
      id: 9,
    },
    {
      name: "Fulham",
      image: fulham,
      id: 10,
    },
    {
      name: "Leeds",
      image: leeds,
      id: 11,
    },
    {
      name: "Leicester",
      image: leicester,
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
      name: "Southampton",
      image: southhampton,
      id: 16,
    },
    {
      name: "Tottenham",
      image: tottenham,
      id: 17,
    },
    {
      name: "West Ham",
      image: westham,
      id: 18,
    },
    {
      name: "Wolves",
      image: wolves,
      id: 19,
    },
    {
      name: "Nottingham Forest",
      image: nottforrest,
      id: 20,
    },
  ];

  async function updateFavoriteTeam (team) {
    setFavoriteTeam(team)
    let recordSingle = null
    try {
    recordSingle = await pb.collection('team').getFirstListItem(`userID="${user.model.id}"`, {
  });
} catch (error) {
  console.log(error)
}
  const data = {
    "team": teamsID[team],
    "userID": user.model.id,
};
    if (recordSingle) {
      const record = await pb.collection('team').update(recordSingle.id, data);
} else {
  const record = await pb.collection('team').create(data);
}

  }

  return (
    <div className="mx-20 mb-20">
      <div className=" text-6xl text-center text-orange-500 uppercase font-bold tracking-wider my-20 ">
        VÆLG ET HOLD
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-20">
          {teams.map((team) => {
            return (
              <div key={team.id} className="flex justify-start items-center">
                <Image
                  src={team.image}
                  width={40}
                  height={40}
                  placeholder="blur"
                />
                <h3 className="ml-3 ">{team.name}</h3>{" "}
                <button>
                  {favoriteTeam === team.name ? (
                    <AiFillStar
                      className="ml-3 text-yellow-500"
                      onClick={() => setFavoriteTeam("")}
                    />
                  ) : (
                    <AiOutlineStar
                      className="ml-3 text-yellow-500"
                      onClick={() => updateFavoriteTeam(team.name)}
                      
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
