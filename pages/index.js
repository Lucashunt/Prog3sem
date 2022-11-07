import { useState, useEffect } from 'react'
import Card from '../comps/card';







export default function Index() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/initial')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>

  
    
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
  