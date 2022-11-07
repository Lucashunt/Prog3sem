import axios from "axios"

export default async function handler(req, res) {
  
    
    const response = await axios.get(`https://fantasy.premierleague.com/api/fixtures/?event=15`);
    const data = response.data;

    const games = data.map((game) => {
        return {'gameID': game.id, 'hometeam':  game.team_h, 'awayteam': game.team_a, 'hometeamGoals': game.team_h_score, 'awayteamGoals': game.team_a_score, 'time': game.kickoff_time, 'gameweek': 15}
    })


    res.status(200).json({games})
}