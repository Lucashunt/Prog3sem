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

export default function tableComp({ table }) {

    table.sort((a, b) =>  b.points - a.points)


    return Array.isArray(table)
    ? table.map((game, i) => (
        <Table
        position={i+1}
        name={game.name}
        wins={game.wins}
        draws={game.draws}
        losses={game.losses}
        goalsFor={game.goalsFor}
        goalsAgainst={game.goalsAgainst}
        points={game.points}
        />
      ))
    : null;
}


const Table = ({
    wins,
    draws,
    losses,
    goalsFor,
    goalsAgainst,
    points,
    name,
    position
  }) => {

    const teams = {
        1: (
          <div className="flex justify-start items-center">
            <Image src={arsenal} width={20} height={20} />
            <h3 className="ml-3 ">Arsenal</h3>{" "}
          </div>
        ),
        2: (
          <div className="flex justify-start items-center">
            <Image src={astonvilla} width={20} height={20} />
            <h3 className="ml-3">Aston Villa</h3>{" "}
          </div>
        ),
        3: (
          <div className="flex justify-start items-center">
            <Image src={bournemouth} width={20} height={20} />
            <h3 className="ml-3">Bournemouth</h3>{" "}
          </div>
        ),
        4: (
          <div className="flex justify-start items-center">
            <Image src={brentford} width={20} height={20} />
            <h3 className="ml-3">Brentford</h3>{" "}
          </div>
        ),
        5: (
          <div className="flex justify-start items-center">
            <Image src={brighton} width={20} height={20} />
            <h3 className="ml-3">Brighton</h3>{" "}
          </div>
        ),
        6: (
          <div className="flex justify-start items-center">
            <Image src={chelsea} width={20} height={20} />
            <h3 className="ml-3">Chelsea</h3>{" "}
          </div>
        ),
        7: (
          <div className="flex justify-start items-center">
            <Image src={chrystalpalace} width={20} height={20} />
            <h3 className="ml-3">Chrystal Palace</h3>{" "}
          </div>
        ),
        8: (
          <div className="flex justify-start items-center">
            <Image src={everton} width={20} height={20} />
            <h3 className="ml-3">Everton</h3>{" "}
          </div>
        ),
        9: (
          <div className="flex justify-start items-center">
            <Image src={fulham} width={20} height={20} />
            <h3 className="ml-3">Fulham</h3>{" "}
          </div>
        ),
        10: (
          <div className="flex justify-start items-center">
            <Image src={leicester} width={20} height={20} />
            <h3 className="ml-3">Leicester</h3>{" "}
          </div>
        ),
        11: (
          <div className="flex justify-start items-center">
            <Image src={leeds} width={20} height={20} />
            <h3 className="ml-3">Leeds</h3>{" "}
          </div>
        ),
        12: (
          <div className="flex justify-start items-center">
            <Image src={liverpool} width={20} height={20} />
            <h3 className="ml-3">Liverpool</h3>{" "}
          </div>
        ),
        13: (
          <div className="flex justify-start items-center">
            <Image src={manC} width={20} height={20} />
            <h3 className="ml-3">Man City</h3>{" "}
          </div>
        ),
        14: (
          <div className="flex justify-start items-center">
            <Image src={manU} width={20} height={20} />
            <h3 className="ml-3">Man Utd</h3>{" "}
          </div>
        ),
        15: (
          <div className="flex justify-start items-center">
            <Image src={newcastle} width={20} height={20} />
            <h3 className="ml-3">Newcastle</h3>{" "}
          </div>
        ),
        16: (
          <div className="flex justify-start items-center">
            <Image src={nottforrest} width={20} height={20} />
            <h3 className="ml-3">Nott&apos;m Forest</h3>{" "}
          </div>
        ),
        17: (
          <div className="flex justify-start items-center">
            <Image src={southhampton} width={20} height={20} />
            <h3 className="ml-3">Southhampton</h3>{" "}
          </div>
        ),
        18: (
          <div className="flex justify-start items-center">
            <Image src={tottenham} width={20} height={20} />
            <h3 className="ml-3">Spurs</h3>{" "}
          </div>
        ),
        19: (
          <div className="flex justify-start items-center">
            <Image src={westham} width={20} height={20} />
            <h3 className="ml-3">West Ham</h3>{" "}
          </div>
        ),
        20: (
          <div className="flex justify-start items-center">
            <Image src={wolves} width={20} height={20} />
            <h3 className="ml-3">Wolves</h3>{" "}
          </div>
        ),
      };
    
      

return (
    <tr className="bg-white border-b hover:bg-blue-100/40">
      <th className="py-4 px-6">{position}</th>
      <td className="py-4 px-6"><Link href={`/team/${name}`}><a className="hover:text-blue-600">{teams[name]} </a></Link></td>
      
      <td className="py-4 px-6">{wins + draws + losses}</td>
      <td className="py-4 px-6">{wins}</td>
      <td className="py-4 px-6">{draws}</td>
      <td className="py-4 px-6">{losses}</td>
      <td className="py-4 px-6">{goalsFor}-{goalsAgainst}</td>
      <td className="py-4 px-6">{goalsFor - goalsAgainst}</td>
      <td className="py-4 px-6">{points}</td>
    </tr>
)
  }      
  
