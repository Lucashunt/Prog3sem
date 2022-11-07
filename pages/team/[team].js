import axios from "axios";


export async function getServerSideProps({query}) {
    const teamQuery = query.team

    const response = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = response.data.teams.find((team) => team.id === parseInt(teamQuery))
    


    return {
        props: {data}, // will be passed to the page component as props
      }  
}


export default function Team(data) {



    return (
        <div>
        <div>Team: {data.data.name}</div>
        <div>Strength: {data.data.strength}</div>
        <div>Strength_overall_home: {data.data.strength_overall_home}</div>
        <div>Strength_overall_away: {data.data.strength_overall_away}</div>
        <div>Strength_attack_home: {data.data.strength_attack_home}</div>
        <div>Strength_attack_away: {data.data.strength_attack_away}</div>
        <div>Strength_defence_home: {data.data.strength_defence_home}</div>
        <div>Strength_defence_away{data.data.strength_defence_away}</div>

        </div>
    )
}