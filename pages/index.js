import { useState, useEffect } from 'react'
import Card from '../comps/card';


import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSWR('/api/initial', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  
    
     return (
   <main>
       <div className='mx-20 mb-20'>
        {/* <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80' onClick={() => apiCall(1)}><a>GW 1</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(2)}><a>GW 2</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(3)}><a>GW 3</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(4)}><a>GW 4</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(5)}><a>GW 5</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(6)}><a>GW 6</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(8)}><a>GW 8</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(9)}><a>GW 9</a></button>
        <button className='px-8 py-4 bg-green-400 rounded-2xl text-white font-bold hover:bg-green-400/80 ml-2' onClick={() => apiCall(10)}><a>GW 10</a></button> */}
      <div className='text-center mb-5 mt-10 text-5xl font-bold text-white bg-blue-500 rounded-lg p-10 tracking-wider'>GAMEWEEK <b className='text-orange-400 font-extrabold text-7xl'>{data.games[0].gameweek}</b> </div>
      <div className='grid gap-5 sm:grid-cols-2'>
      <Card gameweek={data.games} className=""/>
      </div>
   </div>
   </main>
     )
   }
  