import React, { useEffect, useState } from 'react';
import Dialogs from '../Dialogs/Dialogs';
import Messages from '../Messages/Messages';
import { SidebarHeader, MessagesHeader, MessageInput } from '../../components';

import styles from './Chat.module.scss';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const Chat: React.FC = () => {
  const [isShowedModal, toggleModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const onAddContact = () => {
    toggleModal(true);
    setModalContent(<div>asdasdasdasdasd</div>);
  };

  useEffect(() => {}, [modalContent]);

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
          <MessagesHeader onAddContact={onAddContact} />
        </div>

        <div className={styles.messageList}>
          <Messages />
        </div>

        <div className={styles.messageInput}>
          <MessageInput />
        </div>
      </div>

      <ModalWindow isShowed={isShowedModal} title={'Введите логин или email'}>
        {modalContent}
      </ModalWindow>
    </div>
  );
};

export default Chat;
