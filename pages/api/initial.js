import axios from "axios"

export default async function handler(req, res) {
const gameweekDate = [
    [1,5,8,2022],
    [2,13,8,2022],
    [3,20,8,2022],
    [4,27,8,2022],
    [5,30,8,2022],
    [6,3,9,2022],
    [7,3,9,2022],
    [8,16,9,2022],
    [9,1,10,2022],
    [10,8,10,2022],
    [11,14,10,2022],
    [12,18,10,2022],
    [13,22,10,2022],
    [14,29,10,2022],
    [15,5,11,2022],
    [16,12,11,2022],
    [17,26,12,2022],
    [18,30,12,2022],
    [19,2,1,2023],
    [20,14,1,2023],
  ]

  
   const today = new Date().toLocaleDateString().toString().replace(/\./g, ',').split(',').map(Number)
   today.unshift(0)
 
//   let gameweeksBefore = []
//   for(let i = 0; i < gameweekDate.length; i++){
//     if (parseInt(gameweekDate[i].slice(3,4)) === parseInt(today.slice(3,4)) && parseInt(gameweekDate[i].slice(2,3)) === parseInt(today.slice(2,3)) && parseInt(gameweekDate[i].slice(1,2)) <= parseInt(today.slice(1,2))){
//       gameweeksBefore.push(gameweekDate[i])
//     }   
//     }
    
//     const gameweek = parseInt(gameweeksBefore[0].slice(0,1))
    
    
    const response = await axios.get(`https://fantasy.premierleague.com/api/fixtures/?event=15`);
    const data = response.data;

    const games = data.map((game) => {
        return {'gameID': game.id, 'hometeam':  game.team_h, 'awayteam': game.team_a, 'hometeamGoals': game.team_h_score, 'awayteamGoals': game.team_a_score, 'time': game.kickoff_time, 'gameweek': 15}
    })


    res.status(200).json({games, today})
}