import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../components/App';
import LiveMatches from '../../components/LiveMatches';

describe('App', () => {
  const props = {
    current: {
      context: {
        liveEvents: [],
      },
      matches: Function,
    },
    send: Function,
  };
  const renderer = TestRenderer.create(<App {...props} />);

  it('should render LiveMatches component with children', () => {
    const renderedTree = renderer.toJSON();
    expect(renderedTree.children.length).toBe(4);
  });

  it('should render LiveMatches component with children', () => {
    const renderedTree = renderer.toJSON();
    expect(renderedTree).toMatchSnapshot();
  });

  it('renders correctly child component LiveMatches', () => {
    const childRenderer = new ShallowRenderer();
    childRenderer.render(<LiveMatches {...props} />);
    const result = childRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
