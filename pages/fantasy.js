import { useState, useRef} from 'react';

export default function Fantasy() {

const [match, setMatch] = useState('match')
const form = useRef();

    async function apiCall (e){
      e.preventDefault();
      const gameW = parseInt(form.current.gameweek.value + '0') - 10
      const matchIDBefore = parseInt(form.current.match.value)
      const matchID = matchIDBefore + gameW
        const res = await fetch(`api/hello/?matchID=${matchID}&gameweek=${form.current.gameweek.value}`)
        const data = await res.json()
        setMatch(data)
        
     }
   
     return (
   <main>
       <div className='m-20'>

       <form ref={form} onSubmit={apiCall}>
       <label className="block mt-2">
                <span className="">Gameweek</span>
                <input
                  type="text"
                  className="indent-2 border border-gray-300 rounded-md mt-1 block p-2"
                  placeholder="Mellem 1 - 10"
                  name="gameweek"
                />
              </label>
       <label className="block mt-4">
                <span className="">Match Number</span>
                <input
                  type="text"
                  className="indent-2 border border-gray-300 rounded-md mt-1 block p-2"
                  placeholder="Mellem 1 - 10"
                  name="match"
                />
              </label>

       <button className="p-4 bg-blue-400 rounded-lg my-5 text-white hover:bg-blue-400/80 font-bold" type="submit">Search for matchup</button>
       </form>
   

   <div>{match}</div>
   </div>
   </main>
     )
   }
   