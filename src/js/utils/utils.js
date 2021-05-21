import fetchJsonp from 'fetch-jsonp';
import { useState, useEffect } from 'react';
import basketball from '../../images/icons/basketball.png';
import football from '../../images/icons/football.png';
import tennis from '../../images/icons/tennis.png';
import defaultIcon from '../../images/icons/defaultIcon.png';
import { LIVE_MATCHES_API, MAX_CACHE_TIME, FETCH_MATCHES_ERROR_MESSAGE } from '../constants';

export const mappedLiveEventsData = (data) => {
  return data.map(
    ({
      event: { awayName, homeName, id, sport, start },
      liveData: { score: { away: awayScore, home: homeScore } = {} },
    }) => ({
      start,
      awayName,
      homeName,
      id,
      sport,
      awayScore,
      homeScore,
    }),
  );
};

export const carouselStyle = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const getLiveEventsFromCache = (setEventsCallback, fetchEventsCallback) => {
  const cacheTime = window.localStorage.getItem('liveEventsCacheTimeStamp');
  const cacheData = window.localStorage.getItem('liveEvents');
  const outdatedCacheTime = Number(cacheTime) + MAX_CACHE_TIME;
  if (cacheTime && cacheData && Date.now() <= outdatedCacheTime) {
    setEventsCallback(JSON.parse(cacheData));
  } else {
    fetchEventsCallback();
  }
};

export const useFetchDataHook = () => {
  const [liveEvents, setLiveEvents] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchLiveEvents = () => {
      fetchJsonp(LIVE_MATCHES_API)
        .then((response) => response.json())
        .then((json) => {
          window.localStorage.setItem('liveEventsCacheTimeStamp', Date.now());
          window.localStorage.setItem('liveEvents', JSON.stringify(json));
          setLiveEvents(json);
        })
        .catch((errorAPI) => {
          console.log(errorAPI);
          // hardcoded user friendly error message when no error handling requiremnts
          const error = FETCH_MATCHES_ERROR_MESSAGE;
          setErrorMessage(error);
        });
    };
    getLiveEventsFromCache(setLiveEvents, fetchLiveEvents);
  }, []);

  return [liveEvents, errorMessage];
};

export const formatDate = (dateString) => {
  // dateString.length needs to be >=16 to contain both an event date and time
  if (dateString && dateString.length >= 16) {
    const currentDate = new Date().toISOString().slice(0, 10);
    const liveEventDate = dateString.slice(0, 10);
    const time = dateString.slice(11, 16);
    return currentDate === liveEventDate ? `Today, ${time}` : `${liveEventDate}, ${time}`;
  }
  return 'No date';
};

export const getSportIcon = (sport) => {
  if (sport && sport.length > 0) {
    const iconPath = {
      basketball,
      football,
      tennis,
    };
    return iconPath[sport.toLowerCase()] || defaultIcon;
  }
  return defaultIcon;
};
