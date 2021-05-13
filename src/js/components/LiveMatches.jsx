// @flow

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SideBlock from './SideBlock';
import Match from './Match';
import Error from './Error';
import Loading from './Loading';
import { mappedLiveEventsData, carouselStyle, getLiveEventsFromCache } from '../utils/utils';
import { STATES } from '../constants';

const LiveMatches = ({ current, send }: { current: string, send: Function }) => {
  const { liveEvents, error } = current.context;
  const { LOADING, LOADED, FAILED } = STATES;

  getLiveEventsFromCache({ send });

  return (
    <div id="content">
      <article>
        <h1>Live matches</h1>
        <p className="preamble">Here is a list of matches that are live right now.</p>
        <SideBlock />
        <div id="live-matches">
          <Slider {...carouselStyle}>
            {current.matches(LOADING) && <Loading />}
            {current.matches(LOADED) &&
              mappedLiveEventsData(liveEvents).map((match) => (
                <Match key={match.id} liveEvent={match} send={send} />
              ))}
            {current.matches(FAILED) && <Error error={error} />}
          </Slider>
        </div>
      </article>
    </div>
  );
};

export default LiveMatches;
