import { useState, useRef} from 'react';
import Card from '../comps/card';
import axios from 'axios';


export async function getStaticProps() {
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
 
  let gameweeksBefore = []
  for(let i = 0; i < gameweekDate.length; i++){
    if (parseInt(gameweekDate[i].slice(3,4)) === parseInt(today.slice(3,4)) && parseInt(gameweekDate[i].slice(2,3)) === parseInt(today.slice(2,3)) && parseInt(gameweekDate[i].slice(1,2)) <= parseInt(today.slice(1,2))){
      gameweeksBefore.push(gameweekDate[i])
    }   
    }
    const gameweek = parseInt(gameweeksBefore.pop().slice(0,1))
        
    
    const response = await axios.get(`https://fantasy.premierleague.com/api/fixtures/?event=${gameweek}`);
    const data = response.data;

    const games = data.map((game) => {
        return {'gameID': game.id, 'hometeam':  game.team_h, 'awayteam': game.team_a, 'hometeamGoals': game.team_h_score, 'awayteamGoals': game.team_a_score, 'time': game.kickoff_time, 'gameweek': gameweek}
    })
        

     

  return {
    props: {games}, // will be passed to the page component as props
  }
}

export default function Index(games) {

  
  
    
     return (
   <main>
       <div className='m-20'>
        {/* <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80' onClick={() => apiCall(1)}><a>GW 1</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(2)}><a>GW 2</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(3)}><a>GW 3</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(4)}><a>GW 4</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(5)}><a>GW 5</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(6)}><a>GW 6</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(8)}><a>GW 8</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(9)}><a>GW 9</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(10)}><a>GW 10</a></button> */}

      <div className='grid gap-2 mt-20'>
      <Card gameweek={games.games} className=""/>
      </div>
   </div>
   </main>
     )
   }
   