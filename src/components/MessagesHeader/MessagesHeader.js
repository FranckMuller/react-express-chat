import React from 'react';
import classNames from 'classnames';

import styles from './MessagesHeader.module.scss';

const isOnline = true;

const MessagesHeader = () => {
  return (
    <div className={styles.messagesHeader}>
      <div className={styles.userName}>Брукля Пукля</div>
      <div
        className={classNames(styles.status, {
          [styles.online]: isOnline
        })}
      >
        {isOnline ? <span>oнлайн</span> : <span>oффлайн</span>}
      </div>
    </div>
  );
};

export default MessagesHeader;
