import React from 'react';
import Dialogs from '../Dialogs/Dialogs';
import Messages from '../Messages/Messages';
import { SidebarHeader } from '../../components';

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
        <Messages />
      </div>
    </div>
  );
};

export default Chat;
