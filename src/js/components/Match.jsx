// @flow

import React from 'react';
import { LIVE_BETTING_URL } from '../constants';
import { formatDate, getSportIcon } from '../utils/utils';
import Button from './Button';

const Match = ({
  liveEvent,
}: {
  liveEvent: {
    start: string,
    awayName: string,
    homeName: string,
    id: Number,
    sport: string,
    awayScore: string,
    homeScore: string,
  },
}) => {
  const { start, awayName, homeName, id, sport, awayScore, homeScore } = liveEvent;

  const eventDate = formatDate(start);
  const sportIcon = getSportIcon(sport);
  const liveEventUrl = `${LIVE_BETTING_URL}${id}`;

  return (
    <div className="match">
      <div className="score">
        {awayScore && homeScore ? `${awayScore} - ${homeScore}` : 'No score'}
      </div>
      <div className="team-container">
        <img src={sportIcon} alt={sport || 'sport'} /> {awayName} {awayName && homeName ? '-' : ''}{' '}
        {homeName}
      </div>
      <div className="date">{eventDate}</div>
      <Button liveEventUrl={liveEventUrl} />
    </div>
  );
};

export default Match;
