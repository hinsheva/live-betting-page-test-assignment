import { createMachine, assign } from 'xstate';


export const liveMatchesMachine = createMachine({
  id: 'liveMatches',
  initial: 'fetchMatches',
  context: {
    liveEvents: [],
    errors: '',
  },
  states: {
    fetchMatches: {
        initial: 'loading',
        states: {
            loading: {
                  on: {
                    CALLBACK: {
                      target: 'loaded',
                      actions: assign({liveEvents: (context, event) => event.liveEvents}),
                    }
                  },
                  onError: {
                  target: 'failed',
                  actions: assign({errors: (context, event) => event.errors}),
                }
              },
              loaded: {},
              failed: {}
        }
    }
  },
});

export default liveMatchesMachine;
