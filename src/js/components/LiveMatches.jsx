import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useJSONP from 'use-jsonp';
import SideBlock from './SideBlock';
import Slider from 'react-slick';
import Match from './Match';
import { mappedLiveEventsData, carouselStyle } from '../utils/utils';
import { LIVE_MATCHES_API } from '../constants';

const LiveMatches = ({ current, send }) => {
    const { liveEvents, errors } = current.context   


    const sendJsonP = useJSONP({
        url: LIVE_MATCHES_API,
        id: 'liveMatchesScript',
        callback: (data) => send('CALLBACK', data),
        callbackParam: "callback",
    });

    useEffect(() => {
        sendJsonP();
    });

    return (
        <div id="content">
            <article>
                <h1>Live matches</h1>
                <p className="preamble">
                    Here is a list of matches that are live right now.
                </p>
                <SideBlock />
                {current.matches({ fetchMatches: 'loading' }) && <div> Loading...</div>}
                {current.matches({ fetchMatches: 'loaded' }) && 
                    <Slider {...carouselStyle}>
                        {mappedLiveEventsData(liveEvents).map((match)=> (<Match key={match.id} liveEvent={match}/>))}
                    </Slider>
                }
                {current.matches({ fetchMatches: 'failed' }) && <div>{errors}</div>}
                <div id="live-matches"></div>
            </article>
        </div>
    )
}

export default LiveMatches;