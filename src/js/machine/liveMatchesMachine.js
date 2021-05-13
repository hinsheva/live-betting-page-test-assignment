import { createMachine, assign } from 'xstate';

export const liveMatchesMachine = createMachine({
  id: 'liveEvents',
  initial: 'loading',
  context: {
    liveEvents: null,
    error: '',
  },
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
                    target: 'redirected',
                    actions: assign({liveEventUrl: (context, event) => {window.location.assign(event.liveEventUrl)}}),
                }
            }
        },
    failed: {
        type: 'final',
        },
    redirected: {      
        type: 'final',
        },
    }
});

export default liveMatchesMachine;