import axios from "axios";

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

export async function getServerSideProps({ query }) {
  const playerQuery = query.player;

  const response = await axios.get(
    "https://fantasy.premierleague.com/api/bootstrap-static/"
  );
  const data = response.data.elements.find(
    (player) => player.id === parseInt(playerQuery)
  );

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Player(data) {
  const teams = {
    1: (
      <div className="flex justify-start items-center">
        <Image src={arsenal} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3 ">Arsenal</h3>{" "}
      </div>
    ),
    2: (
      <div className="flex justify-start items-center">
        <Image src={astonvilla} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Aston Villa</h3>{" "}
      </div>
    ),
    3: (
      <div className="flex justify-start items-center">
        <Image src={bournemouth} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Bournemouth</h3>{" "}
      </div>
    ),
    4: (
      <div className="flex justify-start items-center">
        <Image src={brentford} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Brentford</h3>{" "}
      </div>
    ),
    5: (
      <div className="flex justify-start items-center">
        <Image src={brighton} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Brighton</h3>{" "}
      </div>
    ),
    6: (
      <div className="flex justify-start items-center">
        <Image src={chelsea} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Chelsea</h3>{" "}
      </div>
    ),
    7: (
      <div className="flex justify-start items-center">
        <Image src={chrystalpalace} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Chrystal Palace</h3>{" "}
      </div>
    ),
    8: (
      <div className="flex justify-start items-center">
        <Image src={everton} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Everton</h3>{" "}
      </div>
    ),
    9: (
      <div className="flex justify-start items-center">
        <Image src={fulham} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Fulham</h3>{" "}
      </div>
    ),
    10: (
      <div className="flex justify-start items-center">
        <Image src={leicester} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Leicester</h3>{" "}
      </div>
    ),
    11: (
      <div className="flex justify-start items-center">
        <Image src={leeds} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Leeds</h3>{" "}
      </div>
    ),
    12: (
      <div className="flex justify-start items-center">
        <Image src={liverpool} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Liverpool</h3>{" "}
      </div>
    ),
    13: (
      <div className="flex justify-start items-center">
        <Image src={manC} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Man City</h3>{" "}
      </div>
    ),
    14: (
      <div className="flex justify-start items-center">
        <Image src={manU} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Man Utd</h3>{" "}
      </div>
    ),
    15: (
      <div className="flex justify-start items-center">
        <Image src={newcastle} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Newcastle</h3>{" "}
      </div>
    ),
    16: (
      <div className="flex justify-start items-center">
        <Image src={nottforrest} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Nott&apos;m Forest</h3>{" "}
      </div>
    ),
    17: (
      <div className="flex justify-start items-center">
        <Image src={southhampton} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Southhampton</h3>{" "}
      </div>
    ),
    18: (
      <div className="flex justify-start items-center">
        <Image src={tottenham} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Spurs</h3>{" "}
      </div>
    ),
    19: (
      <div className="flex justify-start items-center">
        <Image src={westham} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">West Ham</h3>{" "}
      </div>
    ),
    20: (
      <div className="flex justify-start items-center">
        <Image src={wolves} width={20} height={20} placeholder="blur" />
        <h3 className="ml-3">Wolves</h3>{" "}
      </div>
    ),
  };

  const playerType = {
    1: "Goalkeeper",
    2: "Defender",
    3: "Midfielder",
    4: "Forward",
  };

  return (
    <div className="mx-20 mb-20">
      <div className=" text-6xl text-center text-orange-500 uppercase font-bold tracking-wider my-20">
        {data.data.first_name} {data.data.second_name}{" "}
      </div>
      <div className="grid grid-cols-2  gap-20">
        <div className="shadow-2xl rounded-2xl">
          <h2 className="text-2xl bg-blue-500 text-white rounded-t-2xl py-1 text-center flex justify-center items-center">
            STATS
          </h2>
          <div className="mx-20 my-10 ">
            <div className="grid grid-cols-2 text-lg gap-5">
              <div className="flex flex-row">Team </div>
              <div className="border-b">{teams[data.data.team]} </div>
              <div>Position </div>
              <div className="border-b">
                {playerType[data.data.element_type]}{" "}
              </div>
              <div>Minutes played </div>
              <div className="border-b"> {data.data.minutes}</div>
              <div>Goals </div>
              <div className="border-b">{data.data.goals_scored} </div>
              <div>Assists </div>
              <div className="border-b">{data.data.assists} </div>
              <div>Clean sheets </div>
              <div className="border-b"> {data.data.clean_sheets}</div>
              {playerType[data.data.element_type] === "Defender" ||
              playerType[data.data.element_type] === "Goalkeeper" ? (
                <div>Goals_conceded {data.data.goals_conceded}</div>
              ) : null}
              <div>Own goals </div>
              <div className="border-b">{data.data.own_goals} </div>
              <div>Penalties missed </div>
              <div className="border-b">{data.data.penalties_missed}</div>
              <div>Yellow cards </div>
              <div className="border-b">{data.data.yellow_cards} </div>
              <div>Red cards </div>
              <div className="border-b"> {data.data.red_cards}</div>
              {playerType[data.data.element_type] === "Goalkeeper" ? (
                <div>Penalties_saved: {data.data.penalties_saved}</div>
              ) : null}
              {playerType[data.data.element_type] === "Goalkeeper" ? (
                <div>Saves: {data.data.saves}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-2xl">
          <h2 className="text-2xl bg-blue-500 text-white rounded-t-2xl py-1 text-center flex justify-center items-center">
            FPL STATS
          </h2>
          <div className="mx-20 my-10">
            <div className="grid grid-cols-2 text-lg gap-5">
              <div className="">Total points</div><div className="border-b">{data.data.total_points} </div>
              <div>Points per game</div><div className="border-b">  {data.data.points_per_game}</div>
              <div>Bonus points</div><div className="border-b"> {data.data.bonus} </div>

              <div>
                COP this round
              </div><div className="border-b">{data.data.chance_of_playing_this_round}% </div>
              <div>
                COP next round
                
              </div> <div className="border-b">{data.data.chance_of_playing_next_round}% </div>

              <div>Ict index</div> <div className="border-b">{data.data.ict_index} </div>
              <div>Influence</div> <div className="border-b">{data.data.influence} </div>
              <div>Creativity</div> <div className="border-b">{data.data.creativity}</div>
              <div>Threat</div> <div className="border-b"> {data.data.threat} </div>
              <div>Ict index rank</div> <div className="border-b"> {data.data.ict_index_rank} </div>
              <div>Influence rank</div> <div className="border-b"> {data.data.influence_rank} </div>
              <div>Creativity rank</div> <div className="border-b"> {data.data.creativity_rank} </div>
              <div>Threat rank</div> <div className="border-b"> {data.data.threat_rank} </div>

              <div>Form</div> <div className="border-b"> {data.data.form} </div>
              <div>Value form</div> <div className="border-b">  {data.data.value_form}</div>
              <div>Value season</div> <div className="border-b"> {data.data.value_season} </div>

              <div>Transfers in</div> <div className="border-b"> {data.data.transfers_in} </div>
              <div>Transfers out</div> <div className="border-b"> {data.data.transfers_out} </div>
              <div>Selected by percent</div> <div className="border-b"> {data.data.selected_by_percent}% </div>
            </div>
          </div>
        </div>

        {/* {        <div>Selected_by_percent: {data.data.selected_by_percent}</div>
        <div>Form: {data.data.form}</div>
        <div>Transfers_balance: {data.data.transfers_balance}</div>
        <div>Transfers_in_event: {data.data.transfers_in_event}</div>
        <div>Transfers_out_event: {data.data.transfers_out_event}</div>
        <div>Loaned_in: {data.data.loaned_in}</div>
        <div>Loaned_out: {data.data.loaned_out}</div>

        <div>Ep_this: {data.data.ep_this}</div>
        <div>Ep_next: {data.data.ep_next}</div>
        <div>Special: {data.data.special}</div>
        <div>Minutes: {data.data.minutes}</div>

        <div>Influence_rank: {data.data.influence_rank}</div>
        <div>Influence_rank_type: {data.data.influence_rank_type}</div>


     
        <div>Shots_on_goal_rank: {data.data.shots_on_goal_rank}</div>
        <div>Shots_on_goal_rank_type: {data.data.shots_on_goal_rank_type}</div>
        <div>Big_chances_created: {data.data.big_chances_created}</div>
        <div>Big_chances_created_rank: {data.data.big_chances_created_rank}</div>
        <div>Big_chances_created_rank_type: {data.data.big_chances_created_rank_type}</div>
        <div>Clean_sheets_rank: {data.data.clean_sheets_rank}</div>
        <div>Clean_sheets_rank_type: {data.data.clean_sheets_rank_type}</div>
        <div>Goals_conceded_rank: {data.data.goals_conceded_rank}</div>
        <div>Goals_conceded_rank_type: {data.data.goals_conceded_rank_type}</div>
        <div>Own_goals_rank: {data.data.own_goals_rank}</div>
        <div>Own_goals_rank_type: {data.data.own_goals_rank_type}</div>
        <div>Penalties_saved_rank: {data.data.penalties_saved_rank}</div>
        <div>Penalties_saved_rank_type: {data.data.penalties_saved_rank_type}</div>
        <div>Penalties_missed_rank: {data.data.penalties_missed_rank}</div>
        <div>Penalties_missed_rank_type: {data.data.penalties_missed_rank_type}</div>
        <div>Yellow_cards_rank: {data.data.yellow_cards_rank}</div>
        <div>Yellow_cards_rank_type: {data.data.yellow_cards_rank_type}</div>

        <div>Red_cards_rank: {data.data.red_cards_rank}</div>
        <div>Red_cards_rank_type: {data.data.red_cards_rank_type}</div>
        <div>Saves_rank: {data.data.saves_rank}</div>
        <div>Saves_rank_type: {data.data.saves_rank_type}</div>} */}
      </div>
    </div>
  );
}
