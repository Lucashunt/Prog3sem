import axios from "axios";


export async function getServerSideProps({query}) {
    const playerQuery = query.player

    const response = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = response.data.elements.find((player) => player.id === parseInt(playerQuery))
    
    console.log(data)


    return {
        props: {data}, // will be passed to the page component as props
      }  
}


export default function Player(data) {

const playerType = {
    1: 'Goalkeeper',
    2: 'Defender',
    3: 'Midfielder',
    4: 'Forward'
}

    return (
        <div>
        <div>Player: {data.data.first_name} {data.data.second_name}</div>
        <div>Team: {data.data.team}</div>
        <div>Position: {playerType[data.data.element_type]}</div>
        <div>Now_cost: {data.data.now_cost}</div>
        <div>Chance_of_playing_this_round: {data.data.chance_of_playing_this_round}</div>
        <div>Chance_of_playing_next_round: {data.data.chance_of_playing_next_round}</div>
        <div>Value_form: {data.data.value_form}</div>
        <div>Value_season: {data.data.value_season}</div>
        <div>Form: {data.data.form}</div>
        <div>Points_per_game: {data.data.points_per_game}</div>
        <div>Ep_this: {data.data.ep_this}</div>
        <div>Ep_next: {data.data.ep_next}</div>
        <div>Special: {data.data.special}</div>
        <div>Minutes: {data.data.minutes}</div>
        <div>Goals_scored: {data.data.goals_scored}</div>
        <div>Assists: {data.data.assists}</div>
        <div>Clean_sheets: {data.data.clean_sheets}</div>
        <div>Goals_conceded: {data.data.goals_conceded}</div>
        <div>Own_goals: {data.data.own_goals}</div>
        <div>Penalties_saved: {data.data.penalties_saved}</div>
        <div>Penalties_missed: {data.data.penalties_missed}</div>
        <div>Yellow_cards: {data.data.yellow_cards}</div>
        <div>Red_cards: {data.data.red_cards}</div>
        <div>Saves: {data.data.saves}</div>
        <div>Bonus: {data.data.bonus}</div>
        <div>Bps: {data.data.bps}</div>
        <div>Influence: {data.data.influence}</div>
        <div>Creativity: {data.data.creativity}</div>
        <div>Threat: {data.data.threat}</div>
        <div>Ict_index: {data.data.ict_index}</div>
        <div>Transfers_in: {data.data.transfers_in}</div>
        <div>Transfers_out: {data.data.transfers_out}</div>
        <div>Selected_by_percent: {data.data.selected_by_percent}</div>
        <div>Form: {data.data.form}</div>
        <div>Transfers_balance: {data.data.transfers_balance}</div>
        <div>Transfers_in_event: {data.data.transfers_in_event}</div>
        <div>Transfers_out_event: {data.data.transfers_out_event}</div>
        <div>Loaned_in: {data.data.loaned_in}</div>
        <div>Loaned_out: {data.data.loaned_out}</div>
        <div>Total_points: {data.data.total_points}</div>
        <div>Event_points: {data.data.event_points}</div>
        <div>Points_per_game: {data.data.points_per_game}</div>
        <div>Ep_this: {data.data.ep_this}</div>
        <div>Ep_next: {data.data.ep_next}</div>
        <div>Special: {data.data.special}</div>
        <div>Minutes: {data.data.minutes}</div>
        <div>Influence_rank: {data.data.influence_rank}</div>
        <div>Influence_rank_type: {data.data.influence_rank_type}</div>
        <div>Creativity_rank: {data.data.creativity_rank}</div>
        <div>Creativity_rank_type: {data.data.creativity_rank_type}</div>
        <div>Threat_rank: {data.data.threat_rank}</div>
        <div>Threat_rank_type: {data.data.threat_rank_type}</div>
        <div>Ict_index_rank: {data.data.ict_index_rank}</div>
        <div>Ict_index_rank_type: {data.data.ict_index_rank_type}</div>
        <div>Shots_on_goal: {data.data.shots_on_goal}</div>
        <div>Shots_on_goal_rank: {data.data.shots_on_goal_rank}</div>
        <div>Shots_on_goal_rank_type: {data.data.shots_on_goal_rank_type}</div>
        <div>Big_chances_created: {data.data.big_chances_created}</div>
        <div>Big_chances_created_rank: {data.data.big_chances_created_rank}</div>
        <div>Big_chances_created_rank_type: {data.data.big_chances_created_rank_type}</div>
        <div>Clean_sheets_rank: {data.data.clean_sheets_rank}</div>
        <div>Clean_sheets_rank_type: {data.data.clean_sheets_rank_type}</div>
        <div>Goals_conceded_rank: {data.data.goals_conceded_rank}</div>
        <div>Goals_conceded_rank_type: {data.data.goals_conceded_rank_type}</div>
        <div>Own_goals_rank: {data.data.own_goals_rank}</div>
        <div>Own_goals_rank_type: {data.data.own_goals_rank_type}</div>
        <div>Penalties_saved_rank: {data.data.penalties_saved_rank}</div>
        <div>Penalties_saved_rank_type: {data.data.penalties_saved_rank_type}</div>
        <div>Penalties_missed_rank: {data.data.penalties_missed_rank}</div>
        <div>Penalties_missed_rank_type: {data.data.penalties_missed_rank_type}</div>
        <div>Yellow_cards_rank: {data.data.yellow_cards_rank}</div>
        <div>Yellow_cards_rank_type: {data.data.yellow_cards_rank_type}</div>

        <div>Red_cards_rank: {data.data.red_cards_rank}</div>
        <div>Red_cards_rank_type: {data.data.red_cards_rank_type}</div>
        <div>Saves_rank: {data.data.saves_rank}</div>
        <div>Saves_rank_type: {data.data.saves_rank_type}</div>
        <div>Bonus_rank: {data.data.bonus_rank}</div>
        <div>Bonus_rank_type: {data.data.bonus_rank_type}</div>
        <div>Bps_rank: {data.data.bps_rank}</div>
        <div>Bps_rank_type: {data.data.bps_rank_type}</div>
        <div>Influence_rank: {data.data.influence_rank}</div>
        <div>Influence_rank_type: {data.data.influence_rank_type}</div>
        

        </div>
    )
}