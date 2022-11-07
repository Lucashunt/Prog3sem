import { useState, useEffect } from 'react'
import Card from '../comps/card';


import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSWR('/api/initial', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

console.log('data', data)
console.log('error', error)
  
    
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
      <Card gameweek={data.games} className=""/>
      </div>
   </div>
   </main>
     )
   }
  