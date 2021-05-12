import React from 'react';
import { LIVE_BETTING_URL } from '../constants';

const Match = ({liveEvent}) => {
    const { 
        start,
        awayName,
        homeName,
        id,
        sport,
        awayScore,
        homeScore
    } = liveEvent;

    return (
        <div className="match">
            <div className="score">{awayScore}-{homeScore}</div>
            <div className="team-container">{awayName}-{homeName}
                <img src="" alt={sport}/>
            </div>
            <div className="date">{start}</div>
            <button className="bet-button">
                <a href={`${LIVE_BETTING_URL}${id}`}>Place a bet</a>
            </button>
        </div>
    )
}

export default Match;



