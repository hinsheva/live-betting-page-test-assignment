// @flow

import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SideBlock from './SideBlock';
import Match from './Match';
import Error from './Error';
import Loading from './Loading';
import { mappedLiveEventsData, carouselStyle, useFetchDataHook } from '../utils/utils';
import { LIVE_MATCHES_H1_TEXT, LIVE_MATCHES_P_TEXT } from '../constants';

const LiveMatches = () => {
  const [liveEvents, errorMessage] = useFetchDataHook();
  const [flowState, setFlowState] = useState('LOADING');

  useEffect(() => {
    if (liveEvents) {
      setFlowState('LOADED');
    }
    if (errorMessage) {
      setFlowState('FAILED');
    }
  }, [liveEvents, errorMessage]);

  return (
    <div id="content">
      <article>
        <h1>{LIVE_MATCHES_H1_TEXT}</h1>
        <p className="preamble">{LIVE_MATCHES_P_TEXT}</p>
        <SideBlock />
        <div id="live-matches">
          <Slider {...carouselStyle}>
            {flowState === 'LOADING' && <Loading />}
            {flowState === 'LOADED' &&
              mappedLiveEventsData(liveEvents.liveEvents).map((match) => (
                <Match key={match.id} liveEvent={match} />
              ))}
            {flowState === 'FAILED' && <Error error={errorMessage} />}
          </Slider>
        </div>
      </article>
    </div>
  );
};

export default LiveMatches;
