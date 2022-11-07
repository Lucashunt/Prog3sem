import axios from "axios";
import Table from "../comps/tableComp";
export async function getServerSideProps({}) {
  const response = await axios.get(
    "https://fantasy.premierleague.com/api/fixtures/"
  );

  const teamsTable = [
    {
      name: 1,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 2,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 3,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 4,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 5,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 6,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 7,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 8,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 9,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 10,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 11,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 12,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 13,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 14,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 15,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 16,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 17,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 18,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 19,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
    {
      name: 20,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    },
  ];

  for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].finished === true) {
      if (response.data[i].team_a_score > response.data[i].team_h_score) {
        teamsTable[response.data[i].team_a - 1].wins += 1;
        teamsTable[response.data[i].team_h - 1].losses += 1;
        teamsTable[response.data[i].team_a - 1].points += 3;

        teamsTable[response.data[i].team_a - 1].goalsFor +=
          response.data[i].team_a_score;
        teamsTable[response.data[i].team_a - 1].goalsAgainst +=
          response.data[i].team_h_score;

        teamsTable[response.data[i].team_h - 1].goalsFor +=
          response.data[i].team_h_score;
        teamsTable[response.data[i].team_h - 1].goalsAgainst +=
          response.data[i].team_a_score;
      } else if (
        response.data[i].team_a_score < response.data[i].team_h_score
      ) {
        teamsTable[response.data[i].team_a - 1].losses += 1;
        teamsTable[response.data[i].team_h - 1].wins += 1;
        teamsTable[response.data[i].team_h - 1].points += 3;

        teamsTable[response.data[i].team_h - 1].goalsFor +=
          response.data[i].team_h_score;
        teamsTable[response.data[i].team_h - 1].goalsAgainst +=
          response.data[i].team_a_score;

        teamsTable[response.data[i].team_a - 1].goalsFor +=
          response.data[i].team_a_score;
        teamsTable[response.data[i].team_a - 1].goalsAgainst +=
          response.data[i].team_h_score;
      } else {
        teamsTable[response.data[i].team_a - 1].draws += 1;
        teamsTable[response.data[i].team_h - 1].draws += 1;
        teamsTable[response.data[i].team_h - 1].points += 1;
        teamsTable[response.data[i].team_a - 1].points += 1;

        teamsTable[response.data[i].team_h - 1].goalsFor +=
          response.data[i].team_h_score;
        teamsTable[response.data[i].team_h - 1].goalsAgainst +=
          response.data[i].team_a_score;

        teamsTable[response.data[i].team_a - 1].goalsFor +=
          response.data[i].team_a_score;
        teamsTable[response.data[i].team_a - 1].goalsAgainst +=
          response.data[i].team_h_score;
      }
    }
  }

  return {
    props: { teamsTable }, // will be passed to the page component as props
  };
}

export default function tableComp(teamsTable) {
  return (
    <>
    <div className="m-20">
        <div className="flex justify-center">
      <div className="overflow-x-auto relative shadow-2xl sm:rounded-2xl">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-blue-500 text-white  ">
            <tr className="">
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Team</th>
              <th className="py-3 px-6">P</th>
              <th className="py-3 px-6">W</th>
              <th className="py-3 px-6">D</th>
              <th className="py-3 px-6">L</th>
              <th className="py-3 px-6">+/-</th>
              <th className="py-3 px-6">GD</th>
              <th className="py-3 px-6">PTS</th>
            </tr>
          </thead>

          <tbody className="">
            <Table table={teamsTable.teamsTable} />
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  );
}
