import fetchJsonp from 'fetch-jsonp';
import { LIVE_MATCHES_API } from '../constants';


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
    slidesToScroll: 1
};


export const fetchLiveEvents = ({send}) => {
fetchJsonp(LIVE_MATCHES_API)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        send('LIVE_MATCHES_SUCCESS', json);
    }).catch(function(error) {
        error = "Request to fetch data failed. Please Try again later."
        send('LIVE_MATCHES_FAILED', {error});
    });
}
