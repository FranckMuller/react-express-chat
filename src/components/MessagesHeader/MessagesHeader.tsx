import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './MessagesHeader.module.scss';
import MessagesHeaderMenu from '../MessagesHeaderMenu/MessagesHeaderMenu';

const isOnline = true;

type MessagesHeaderProps = {
  onAddContact: () => void;
};

const MessagesHeader: React.FC<MessagesHeaderProps> = ({ onAddContact }) => {
  const [isShowMenu, toggleMenu] = useState<boolean>(false);

  const onToggleMenu = () => {
    console.log(isShowMenu);
    toggleMenu(!isShowMenu);
  };

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

      <button onClick={onToggleMenu} className={styles.menuBtn}></button>
      <MessagesHeaderMenu onAddContact={onAddContact} isShow={isShowMenu} />
    </div>
  );
};

export default MessagesHeader;
