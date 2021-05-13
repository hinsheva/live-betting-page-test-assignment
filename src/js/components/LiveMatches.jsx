import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBlock from './SideBlock';
import Slider from 'react-slick';
import Match from './Match';
import Error from './Error';
import Loading from './Loading';
import { mappedLiveEventsData, carouselStyle, getLiveEventsFromCache } from '../utils/utils';

const LiveMatches = ({ current, send }) => {
    const { liveEvents, error } = current.context   

    getLiveEventsFromCache({send});

    return (
        <div id="content">
            <article>
                <h1>Live matches</h1>
                <p className="preamble">
                    Here is a list of matches that are live right now.
                </p>
                <SideBlock />
                <div id="live-matches">
                    <Slider {...carouselStyle}>
                        {current.matches('loading') && <Loading />}
                        {current.matches('loaded') && mappedLiveEventsData(liveEvents).map((match)=> (<Match key={match.id} liveEvent={match} send={send}/>))}
                        {current.matches('failed') && <Error error={error}/>}
                    </Slider>
                </div>
            </article>
        </div>
    )
}

export default LiveMatches;