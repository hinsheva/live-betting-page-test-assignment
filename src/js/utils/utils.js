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

