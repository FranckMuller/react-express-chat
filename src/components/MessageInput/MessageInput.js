import React from 'react';

import styles from './MessageInput.module.scss';

const isValue = true;

const MessageInput = () => {
  return (
    <div className={styles.messageInput}>
      <button className={styles.attachmentsBtn}></button>
      <input type="text" placeholder="Напишите сообщение" />
      {!isValue ? <button className={styles.microBtn}></button> : <button className={styles.sendBtn}></button>}
      <button className={styles.smileBtn}></button>
    </div>
  );
};

export default MessageInput;
