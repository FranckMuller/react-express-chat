import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './MessagesHeaderMenu.module.scss';

export interface MessagesHeaderMenuProps {
  isShow: boolean;
  onAddContact: () => void;
}

const MessagesHeaderMenu: React.FC<MessagesHeaderMenuProps> = ({ isShow, onAddContact }) => {
  return (
    <CSSTransition
      in={isShow}
      timeout={300}
      classNames={{
        appear: styles.menu,
        enterActive: styles.menuActiveEnter,
        exitActive: styles.menuActiveExit
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.messagesHeaderMenu}>
        <ul>
          <li onClick={onAddContact} className={styles.addContact}>
            add contact
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default MessagesHeaderMenu;
