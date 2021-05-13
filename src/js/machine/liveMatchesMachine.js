import { createMachine, assign } from 'xstate';

export const liveMatchesMachine = createMachine({
  id: 'liveEvents',
  initial: 'liveMatches',
  context: {
    liveEvents: [],
    error: '',
  },
  states: {
    liveMatches: {
        initial: 'loading',
        states: {
            loading: {
                  on: {
                    'liveMatchesSuccess': {
                      target: 'loaded',
                      actions: assign({liveEvents: (context, event) => event.liveEvents}),
                    },
                    'liveMatchesFailed': {
                        target: 'failed',
                        actions: assign({error: (context, event) => event.error}),
                      },
                  },
              },
              loaded: {
                  on: {
                    'placeBet': {
                        initial: 'loading',
                        target: 'redirected',
                        actions: assign({liveEventUrl: (context, event) => {window.location.assign(event.liveEventUrl)}}),
                    }
                  }
              },
              failed: {},
              redirected: {      
                type: 'final',
            },
        },
    },
  },
});

export default liveMatchesMachine;
