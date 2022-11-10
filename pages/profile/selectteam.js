import Image from "next/image";
import Link from "next/link";
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

export default function SelectTeam() {
  const [favoriteTeam, setFavoriteTeam] = useState("");

  // Ville smide denne ind i en anden fil og så importere den ind i denne fil
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
                      onClick={() => setFavoriteTeam(team.name)}
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
