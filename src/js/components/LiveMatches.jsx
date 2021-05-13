import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBlock from './SideBlock';
import Slider from 'react-slick';
import Match from './Match';
import Error from './Error';
import Loading from './Loading';
import { mappedLiveEventsData, carouselStyle, fetchLiveEvents } from '../utils/utils';

const LiveMatches = ({ current, send }) => {
    const { liveEvents, error } = current.context   

    fetchLiveEvents({send});

    return (
        <div id="content">
            <article>
                <h1>Live matches</h1>
                <p className="preamble">
                    Here is a list of matches that are live right now.
                </p>
                <SideBlock />
                <Slider {...carouselStyle}>
                    {current.matches({ liveMatches: 'loading' }) && <Loading />}
                    {current.matches({ liveMatches: 'loaded' }) && mappedLiveEventsData(liveEvents).map((match)=> (<Match key={match.id} liveEvent={match} send={send}/>))}
                    {current.matches({ liveMatches: 'failed' }) && <Error error={error}/>}
                </Slider>
                <div id="live-matches"></div>
            </article>
        </div>
    )
}

export default LiveMatches;