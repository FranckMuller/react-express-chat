import React from 'react';
import Dialogs from '../Dialogs/Dialogs';
import Messages from '../Messages/Messages';
import { SidebarHeader, MessagesHeader, MessageInput } from '../../components';

import styles from './Chat.module.scss';

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <SidebarHeader />
        </div>

        <div className={styles.dialogs}>
          <Dialogs />
        </div>
      </div>

      <div className={styles.messages}>
        <div className={styles.messagesHeader}>
          <MessagesHeader />
        </div>

        <div className={styles.messageList}>
          <Messages />
        </div>

        <div className={styles.messageInput}>
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Chat;
