import basketball from '../../images/icons/basketball.png';
import football from '../../images/icons/football.png';
import tennis from '../../images/icons/tennis.png';
import defaultIcon from '../../images/icons/defaultIcon.png';
import fetchJsonp from 'fetch-jsonp';
import { LIVE_MATCHES_API, MAX_CACHE_TIME } from '../constants';


export const mappedLiveEventsData = (data) => data.map(({
    event : {awayName, homeName, id, sport, start }, 
    liveData: {
      score :{ away: awayScore, home: homeScore} = {}
    }}) => ({
    start,
    awayName,
    homeName,
    id,
    sport,
    awayScore,
    homeScore
  }));

  export const carouselStyle = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};

export const getLiveEventsFromCache = ({send}) => {
  const cacheTime = localStorage.getItem('liveEventsCacheTimeStamp');
  const cacheData = localStorage.getItem('liveEvents');
  const outdatedCacheTime = parseInt(cacheTime) + MAX_CACHE_TIME;
  if(cacheTime && cacheData && (Date.now() <= outdatedCacheTime)){
    send('liveMatchesSuccess', JSON.parse(cacheData));
  } else {
    fetchLiveEvents({send});
  }
};

export const fetchLiveEvents = ({send}) => {
    fetchJsonp(LIVE_MATCHES_API)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        localStorage.setItem('liveEventsCacheTimeStamp', Date.now())
        localStorage.setItem('liveEvents', JSON.stringify(json));
        send('liveMatchesSuccess', json);
    }).catch(function(error) {
        //hardcoded user friendly error message when no error handling requiremnts
        error = "Match data is not available now. Please Try again later."
        send('liveMatchesFailed', {error});
    });
};

export const formatDate = (dateString) => {
  //dateString.length needs to be >=16 to contain both an event date and time
  if(dateString && dateString.length >=16) {
    const currentDate = new Date().toISOString().slice(0,10);
    const liveEventDate = dateString.slice(0, 10);
    const time = dateString.slice(11, 16)
    return currentDate === liveEventDate ? `Today, ${time}` : `${liveEventDate}, ${time}`;
  }
  return 'No date';
};


export const getSportIcon = (sport) => {
  if(sport && sport.length > 0) {
    const iconPath = {
      basketball,
      football,
      tennis,
    };
    return iconPath[sport.toLowerCase()] || defaultIcon;
  }
}
