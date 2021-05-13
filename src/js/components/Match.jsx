import React from 'react';
import { LIVE_BETTING_URL } from '../constants';
import { formatDate, getSportIcon } from '../utils/utils';

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

    const eventDate = formatDate(start);
    const sportIcon = getSportIcon(sport);

    return (
        <div className="match">
            <div className="score">{awayScore && homeScore ? `${awayScore} - ${homeScore}`: 'No score'}</div>
            <div className="team-container">
                <img src={sportIcon} alt={sport ? sport : 'sport'}/> {awayName} { awayName && homeName ? '-' : ''} {homeName}
            </div>
            <div className="date">{eventDate}</div>
            <button className="bet-button">
                <a href={`${LIVE_BETTING_URL}${id}`}>Place a bet</a>
            </button>
        </div>
    )
}

export default Match;



