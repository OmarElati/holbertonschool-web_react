import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
      <div className="Notifications">
        <button
          aria-label="Close"
          onClick={ () => {
            console.log("Close button has been clicked");
          }}
          style={{
          float: 'right',
          height: '25px',
          width: '25px',
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          }}
          >
          <img
            src={close_icon}
            style={{
              height: '10px',
              width: '10px'
            }}
            alt='Close'
          />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
      </div>
  );
};

export default Notifications;
