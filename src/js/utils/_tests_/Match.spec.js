import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../../components/Button';
import Match from '../../components/Match';
import { PLACE_BET_BUTTON_TEXT } from '../../constants';

Enzyme.configure({ adapter: new Adapter() });

describe('Match', () => {
  const props = {
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

  const renderer = TestRenderer.create(<Match {...props} />);
  const instance = renderer.root;

  it('should render Match component with exact props', () => {
    const match = instance.findByType(Match);
    expect(match.props.liveEvent.homeName).toEqual('Test Team #1');
    expect(match.props.liveEvent.awayName).toEqual('Test Team #2');
    expect(match.props.liveEvent.sport).toEqual("some sport that we don't have icon for");
    expect(match.props.liveEvent.start).toEqual('Today, 18:20');
    expect(match.props.liveEvent.homeScore).toEqual('7');
    expect(match.props.liveEvent.awayScore).toEqual('2');
  });

  it('should render "Place a bet" button', () => {
    const element = instance.findByType('button');
    expect(element.props.children).toEqual(PLACE_BET_BUTTON_TEXT);
  });

  it('should render Match component with children', () => {
    const renderedTree = renderer.toJSON();
    expect(renderedTree.children.length).toBe(4);
  });

  it('should call function on button click', () => {
    const propsB = {
      send: jest.fn(),
      liveEventUrl: 'URL',
    };
    const button = shallow(<Button {...propsB} />);
    button.find('button').simulate('click');
    expect(propsB.send.mock.calls.length).toEqual(1);
  });
});
