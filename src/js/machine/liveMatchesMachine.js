import { createMachine, assign } from 'xstate';

export const liveMatchesMachine = createMachine({
  id: 'liveMatches',
  initial: 'fetchMatches',
  context: {
    liveEvents: [],
    error: '',
  },
  states: {
    fetchMatches: {
        initial: 'loading',
        states: {
            loading: {
                  on: {
                    LIVE_MATCHES_SUCCESS: {
                      target: 'loaded',
                      actions: assign({liveEvents: (context, event) => event.liveEvents}),
                    },
                    LIVE_MATCHES_FAILED: {
                        target: 'failed',
                        actions: assign({error: (context, event) => event.error}),
                      },
                  },
              },
              loaded: {},
              failed: {}
        }
    }
  },
});

export default liveMatchesMachine;
