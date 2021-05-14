import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import LiveMatches from '../../components/LiveMatches';
import Match from '../../components/Match';
import { LIVE_MATCHES_H1_TEXT } from '../../constants';

describe('LiveMatches', () => {
  const props = {
    current: {
      context: {
        liveEvents: [],
      },
      matches: Function,
    },
    send: Function,
  };

  const matchProps = {
    send: Function,
    liveEvent: {
      homeName: 'Test Team #1',
      awayName: 'Test Team #2',
      sport: "some sport that we don't have icon for",
      start: 'Today, 18:20',
      homeScore: '7',
      awayScore: '2',
    },
  };

  const renderer = TestRenderer.create(<LiveMatches {...props} />);
  const instance = renderer.root;

  it('should render "Place a bet" button', () => {
    const element = instance.findByType('h1');
    expect(element.props.children).toEqual(LIVE_MATCHES_H1_TEXT);
  });

  it('should render LiveMatches component with children', () => {
    const renderedTree = renderer.toJSON();
    expect(renderedTree.children.length).toBe(1);
  });

  it('should render LiveMatches component with children', () => {
    const renderedTree = renderer.toJSON();
    expect(renderedTree).toMatchSnapshot();
  });

  it('renders correctly child component Match', () => {
    const childRenderer = new ShallowRenderer();
    childRenderer.render(<Match {...matchProps} />);
    const result = childRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
