

export default function Fantasy() {



    async function apiCall (){
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*",
            }
          };

       const res = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/', options)
       
       console.log(res)
     }
   
     return (
   <main>
       <div>Hello world</div>
   
       <button onClick={apiCall}>Click me for who won premier league in 2020</button>
   
     
   </main>
     )
   }
   