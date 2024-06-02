import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('filterTypeSelected', () => {
  it('should return the value of the filter', () => {
    const state = { notifications: { filter: 'urgent' } };
    expect(filterTypeSelected(state)).toEqual('urgent');
  });
});

describe('getNotifications', () => {
  it('should return a list of the message entities within the reducer', () => {
    const state = { notifications: { messages: [{ id: 1, text: 'Notification 1' }, { id: 2, text: 'Notification 2' }] } };
    expect(getNotifications(state)).toEqual([{ id: 1, text: 'Notification 1' }, { id: 2, text: 'Notification 2' }]);
  });
});

describe('getUnreadNotifications', () => {
  it('should return a list of unread message entities within the reducer', () => {
    const state = { notifications: { messages: [{ id: 1, text: 'Notification 1', isRead: false }, { id: 2, text: 'Notification 2', isRead: true }] } };
    expect(getUnreadNotifications(state)).toEqual([{ id: 1, text: 'Notification 1', isRead: false }]);
  });
});
