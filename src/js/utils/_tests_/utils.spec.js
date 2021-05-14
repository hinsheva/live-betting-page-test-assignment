import { formatDate, getSportIcon } from '../utils';
import basketball from '../../../images/icons/basketball.png';
import football from '../../../images/icons/football.png';
import tennis from '../../../images/icons/tennis.png';
import defaultIcon from '../../../images/icons/defaultIcon.png';

describe('utils', () => {
  it('should return the date formatted as DATE_FORMAT', () => {
    const unformattedDate = '2014-05-12T00:00:00.000Z';
    expect(formatDate(unformattedDate)).toEqual('2014-05-12, 00:00');
  });

  it('should return "today" and time formatted as DATE_FORMAT', () => {
    const unformattedDateNow = new Date().toISOString();
    const currentTime = unformattedDateNow.slice(11, 16);
    expect(formatDate(unformattedDateNow)).toEqual(`Today, ${currentTime}`);
  });

  it('should return "No date" if no date string provided', () => {
    expect(formatDate()).toEqual('No date');
  });

  it('should return proper event icon', () => {
    expect(getSportIcon('basketball')).toEqual(basketball);
    expect(getSportIcon('football')).toEqual(football);
    expect(getSportIcon('tennis')).toEqual(tennis);
    expect(getSportIcon('golf')).toEqual(defaultIcon);
    expect(getSportIcon('test123')).toEqual(defaultIcon);
    expect(getSportIcon()).toEqual(defaultIcon);
  });

});
