import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  test('returns the correct year', () => {
    const currentYear = (new Date()).getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  test('returns "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  test('returns "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  test('returns the correct string', () => {
    expect(getLatestNotification()).toEqual({
        __html: '<strong>Urgent requirement</strong> - complete by EOD'
    });
  });
});
