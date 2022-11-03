

export default function Home() {



 async function apiCall (){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9d20f83bb3msh0343c5708cf0635p11c10ajsne86254aa6602',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
    const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2012&league=39', options)
    const data = await res.json()
    alert(data.response[0].league.standings[0][0].team.name)
  }

  return (
<main>
    <div>Hello world</div>

    <button onClick={apiCall}>Click me for who won premier league in 2020</button>

  
</main>
  )
}
