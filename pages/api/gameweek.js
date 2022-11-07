// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";


const teams = {
    1: 'Arsenal',
    2: 'Aston Villa',
    3: 'Bournemouth',
    4: 'Brentford',
    5: 'Brighton',
    6: 'Chelsea',
    7: 'Chrystal Palace',
    8: 'Everton',
    9: 'Fullham',
    10: 'Leicester',
    11: 'Leeds',
    12: 'Liverpool',
    13: 'Man City',
    14: 'Man Utd',
    15: 'Newcastle',
    16: "Nott'm Forest",
    17: "Southampton",
    18: "Spurs",
    19: "West Ham",
    20: "Wolves"
}

export default async function handler(req, res) {
  const { gameweek } = req.query;
    
    const response = await axios.get(`https://fantasy.premierleague.com/api/fixtures/?event=${gameweek}`);
    const data = response.data;

    const games = data.map((game) => {
        return {'gameID': game.id, 'hometeam':  teams[game.team_h], 'awayteam': teams[game.team_a], 'hometeamGoals': game.team_h_score, 'awayteamGoals': game.team_a_score, 'time': game.kickoff_time, 'gameweek': gameweek}
    })
    

    
    res.status(200).json(games)
}
