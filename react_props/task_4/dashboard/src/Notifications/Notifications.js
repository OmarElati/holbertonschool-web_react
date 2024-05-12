import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({displayDrawer}) => {
  const btnStyle = {
    float: 'right',
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
  }

  return (
    <div className="container">
    <div className="menuItem">
      <p>Your notifications</p>
    </div>

    { displayDrawer &&
    <div className="Notifications">
      <button aria-label="Close" style={btnStyle} onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} alt="close-icon"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>

        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />

      </ul>
    </div> }
    </div>
  );
};

Notifications.prototype = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
