// @flow

import React from 'react';
import { ACTIONS, PLACE_BET_BUTTON_TEXT } from '../constants';

const Button = ({ send, liveEventUrl }: { send: Function, liveEventUrl: string }) => {
  return (
    <button
      className="bet-button"
      type="button"
      onClick={() => send(ACTIONS.PLACE_BET, { liveEventUrl })}>
      {PLACE_BET_BUTTON_TEXT}
    </button>
  );
};

export default Button;
