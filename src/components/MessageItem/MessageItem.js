import React from 'react';
import classNames from 'classnames';
import TransformDate from '../TransformDate/TransformDate';
import AudioMessage from '../AudioMessage/AudioMessage';
import UserAvatar from '../UserAvatar/UserAvatar';

import styles from './MessageItem.module.scss';
import typingLoader from '../../assets/icons/typing.svg';

const MessageItem = ({ user, message, smile, isOwn }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.own]: isOwn,
        [styles.checked]: isOwn && message.isChecked
      })}
    >
      <div className={styles.messageContent}>
        <div className={styles.avatar}>
          <UserAvatar user={user} />
        </div>
        <div className={styles.bubbles}>
          {message.isTyping && (
            <div className={styles.typingLoader}>
              <img src={typingLoader} alt="typing" />
            </div>
          )}

          {!message.isTyping && message.text && (
            <div className={styles.messageText}>
              {message.text && <span className={`text`}>{message.text}</span>}
              {smile && <span className={`smile`}>({smile})</span>}
            </div>
          )}

          {!message.isTyping && message.audio && (
            <div className={styles.messageAudio}>
              <AudioMessage audio={message.audio} />
            </div>
          )}

          {!message.isTyping && message.attachments && (
            <ul className={styles.attachments}>
              {message.attachments.map(attach => (
                <li key={attach.id}>
                  <img src={attach.src} alt={attach.fileName} />
                </li>
              ))}
            </ul>
          )}

          {!message.isTyping && message.createdAt && (
            <div className={styles.messageDate}>
              <time>
                <TransformDate date={message.createdAt} />
              </time>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
