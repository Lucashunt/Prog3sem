import Image from "next/image";
import Link from "next/link";
import arsenal from "../../public/arsenal.png";
import chelsea from "../../public/chelsea.png";
import everton from "../../public/everton.png";
import liverpool from "../../public/liverpool.png";
import astonvilla from "../../public/astonvilla.png";
import bournemouth from "../../public/bournemouth.png";
import brentford from "../../public/brentford.png";
import brighton from "../../public/brighton.png";
import chrystalpalace from "../../public/chrystalpalace.png";
import fulham from "../../public/fulham.png";
import leeds from "../../public/leeds.png";
import leicester from "../../public/leicester.png";
import manC from "../../public/manC.png";
import manU from "../../public/manU.png";
import newcastle from "../../public/newcastle.png";
import southhampton from "../../public/southhampton.png";
import tottenham from "../../public/tottenham.png";
import westham from "../../public/westham.png";
import wolves from "../../public/wolves.png";
import nottforrest from "../../public/nottforrest.png";

import { useState } from "react";


import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'


export default function selectTeam () {

const [star, setStar] = useState(<AiOutlineStar className="w-6 h-6 ml-2"/>)
    
    function favoriteTeam() {
      setStar(<AiFillStar className="w-6 h-6 ml-2" />)
    }

    return (
        <div className="m-20">

         <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 gap-20">
                
          <div className="flex justify-start items-center">
            <Image src={arsenal} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3 ">Arsenal</h3>{" "}
          </div>

          <div className="flex justify-start items-center">
            <Image src={astonvilla} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Aston Villa</h3>{" "}
            <button onClick={favoriteTeam}>{star}</button>
          </div>

          <div className="flex justify-start items-center">
            <Image src={bournemouth} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Bournemouth</h3>{" "}
          </div>

          <div className="flex justify-start items-center">
            <Image src={brentford} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Brentford</h3>{" "}
          </div>


          <div className="flex justify-start items-center">
            <Image src={brighton} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Brighton</h3>{" "}
          </div>

          <div className="flex justify-start items-center">
            <Image src={chelsea} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Chelsea</h3>{" "}
          </div>

          <div className="flex justify-start items-center">
            <Image src={chrystalpalace} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Chrystal Palace</h3>{" "}
          </div>

          <div className="flex justify-start items-center">
            <Image src={everton} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Everton</h3>{" "}
          </div>
    
          <div className="flex justify-start items-center">
            <Image src={fulham} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Fulham</h3>{" "}
          </div>
    
          <div className="flex justify-start items-center">
            <Image src={leicester} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Leicester</h3>{" "}
          </div>
     
          <div className="flex justify-start items-center">
            <Image src={leeds} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Leeds</h3>{" "}
          </div>
     
          <div className="flex justify-start items-center">
            <Image src={liverpool} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Liverpool</h3>{" "}
          </div>
    
          <div className="flex justify-start items-center">
            <Image src={manC} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Man City</h3>{" "}
          </div>
   
          <div className="flex justify-start items-center">
            <Image src={manU} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Man Utd</h3>{" "}
          </div>
    
          <div className="flex justify-start items-center">
            <Image src={newcastle} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Newcastle</h3>{" "}
          </div>
      
          <div className="flex justify-start items-center">
            <Image src={nottforrest} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Nott&apos;m Forest</h3>{" "}
          </div>
     
          <div className="flex justify-start items-center">
            <Image src={southhampton} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Southhampton</h3>{" "}
          </div>
      
          <div className="flex justify-start items-center">
            <Image src={tottenham} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Spurs</h3>{" "}
          </div>
      
          <div className="flex justify-start items-center">
            <Image src={westham} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">West Ham</h3>{" "}
          </div>
      
          <div className="flex justify-start items-center">
            <Image src={wolves} width={40} height={40} placeholder="blur" />
            <h3 className="ml-3">Wolves</h3>{" "}
          </div>
        
          </div>

          </div>
        </div>

    )
}