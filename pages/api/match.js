// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { PRERENDER_REVALIDATE_HEADER } from "next/dist/server/api-utils";



export default async function handler(req, res) {
  const responsePlayers = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
  const dataPlayers = responsePlayers.data.elements;
  

  const { gameID, gameweek } = req.query;

    const response = await axios.get(`https://fantasy.premierleague.com/api/fixtures/?event=${gameweek}`);
    const data = response.data;
    const game = data.find((game) => game.id === parseInt(gameID))
   
    const goals = game.stats.filter((stat) => stat.identifier == 'goals_scored')

    let match = []
 

    for(let i = 0; i < goals[0].a.length; i++){
        match.push({'playerHome': dataPlayers.filter((player) => player.id === goals[0].a[i].element)[0].first_name + ' ' + dataPlayers.filter((player) => player.id === goals[0].a[i].element)[0].second_name, 'timesHome': parseInt(goals[0].a[i].value), 'playerHomeID': dataPlayers.filter((player) => player.id === goals[0].a[i].element)[0].id})
    }

    for(let i = 0; i < goals[0].h.length; i++){
        match.push({'playerAway': dataPlayers.filter((player) => player.id === goals[0].h[i].element)[0].first_name + ' ' + dataPlayers.filter((player) => player.id === goals[0].h[i].element)[0].second_name, 'timesAway': parseInt(goals[0].h[i].value), 'playerAwayID': dataPlayers.filter((player) => player.id === goals[0].h[i].element)[0].id})
    }


    
    res.status(200).json({match})
   
    
}
