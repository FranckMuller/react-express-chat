import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TransformDate from '../TransformDate/TransformDate';
import AudioMessage from '../AudioMessage/AudioMessage';

import styles from './MessageItem.module.scss';
import typingLoader from '../../assets/icons/typing.svg';

const MessageItem = ({ avatar, message, createdAt, smile, isOwn, isChecked, attachments, isTyping, audio }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.own]: isOwn,
        [styles.checked]: isOwn && isChecked
      })}
    >
      <div className={styles.messageContent}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.bubbles}>
          {isTyping && (
            <div className={styles.typingLoader}>
              <img src={typingLoader} alt="typing" />
            </div>
          )}

          {!isTyping && message && (
            <div className={styles.messageText}>
              <span className={`text`}>{message}</span>
              {smile && <span className={`smile`}>({smile})</span>}
            </div>
          )}

          {!isTyping && audio && (
            <div className={styles.messageAudio}>
              <AudioMessage audio={audio} />
            </div>
          )}

          {!isTyping && attachments && (
            <ul className={styles.attachments}>
              {attachments.map(attach => (
                <li key={attach.id}>
                  <img src={attach.src} alt={attach.fileName} />
                </li>
              ))}
            </ul>
          )}

          {!isTyping && createdAt && (
            <div className={styles.messageDate}>
              <time>
                <TransformDate date={createdAt} />
              </time>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MessageItem.defaultProps = {
  isOwn: false,
  smile: null,
  avatar: ''
};

MessageItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string,
  date: PropTypes.string,
  smile: PropTypes.string,
  isOwn: PropTypes.bool.isRequired,
  isChecked: PropTypes.bool,
  attachments: PropTypes.arrayOf(PropTypes.object),
  isTyping: PropTypes.bool
};

export default MessageItem;
