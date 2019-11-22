import React from 'react';

import styles from './SidebarHeader.module.scss';
import dialogsIcon from '../../assets/icons/dialogs-icon.svg';

const SidebarHeader = () => {
  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.heading}>
        <span className={styles.icon}>
          <img src={dialogsIcon} alt="диалоги" />
        </span>
        <span>Список диалогов</span>
      </div>

      <div className={styles.searchPanel}>
        <input type="text" placeholder="поиск по диалогам" />
      </div>
    </div>
  );
};

export default SidebarHeader;
