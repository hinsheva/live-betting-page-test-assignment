// @flow

import React from 'react';
import { PLACE_BET_BUTTON_TEXT } from '../constants';

const Button = ({ liveEventUrl }: { liveEventUrl: string }) => {
  return (
    <button
      className="bet-button"
      type="button"
      onClick={() => window.location.assign(liveEventUrl)}>
      {PLACE_BET_BUTTON_TEXT}
    </button>
  );
};

export default Button;
