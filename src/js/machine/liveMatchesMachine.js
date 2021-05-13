import { createMachine, assign } from 'xstate';
import { STATES, ACTIONS } from '../constants';

export const liveMatchesMachine = createMachine({
  id: 'liveEvents',
  initial: STATES.LOADING,
  context: {
    liveEvents: null,
    error: '',
  },
  states: {
    [STATES.LOADING]: {
        on: {
            [ACTIONS.FETCH_MATCHES_SUCCESS]: {
                target: STATES.LOADED,
                actions: assign({liveEvents: (context, event) => event.liveEvents}),
            },
            [ACTIONS.FETCH_MATCHES_FAILURE]: {
                target: STATES.FAILED,
                actions: assign({error: (context, event) => event.error}),
            },
        },
    },
    [STATES.LOADED]: {
        on: {
            [ACTIONS.PLACE_BET]: {
                target: STATES.REDIRECTED,
                actions: assign({liveEventUrl: (context, event) => {window.location.assign(event.liveEventUrl)}}),
            }
        }
    },
    [STATES.FAILED]: {
        type: 'final',
    },
    [STATES.REDIRECTED]: {      
        type: 'final',
    },
    }
});

export default liveMatchesMachine;