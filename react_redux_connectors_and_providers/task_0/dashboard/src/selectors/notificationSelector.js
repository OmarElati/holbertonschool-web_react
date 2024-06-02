export const filterTypeSelected = (state) => state.notifications.filter;

export const getNotifications = (state) => state.notifications.messages;

export const getUnreadNotifications = (state) => state.notifications.messages.filter(notification => !notification.isRead);
