import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TransformDate from '../TransformDate/TransformDate';
import UserAvatar from '../UserAvatar/UserAvatar';

import styles from './DialogItem.module.scss';

const DialogItem = ({ user, message, messageCount, isOwn }) => (
  <div
    className={classNames(styles.dialogItem, {
      [styles.own]: isOwn,
      [styles.checked]: message.isChecked,
      [styles.online]: !isOwn && user.isOnline
    })}
  >
    <div className={styles.avatar}>
      <div>
        <UserAvatar user={user} />
      </div>
    </div>

    <div className={styles.itemContent}>
      <div className={styles.contentTop}>
        <span className={styles.userName}>{user.name}</span>
        <span className={styles.date}>
          <TransformDate date={message.createdAt} />
        </span>
      </div>

      <div className={styles.contentBottom}>
        <span className={styles.message}>{message.text}</span>
        {!isOwn && !message.isChecked && messageCount && <span className={styles.messageCount}>{messageCount}</span>}
      </div>
    </div>
  </div>
);

DialogItem.propTypes = {
  user: PropTypes.object,
  date: PropTypes.string,
  message: PropTypes.object,
  isOwn: PropTypes.bool,
  mssageCount: PropTypes.number
};

export default DialogItem;
