import React from 'react';
import { IAlert } from '../../redux/alert/reducer';

import styles from './Alert.module.scss';
import closeBtnIcon from './../../assets/icons/close.svg';

type AlertProps = {
  item: IAlert;
  onClose: (id: number) => void;
}

const Alert: React.FC<AlertProps> = ({ item, onClose }) => {
  return (
    <div className={`${styles.alert} ${styles[item.type]}`}>
      <div className={styles.alertContent}>
        {item.message}
        <button className={styles.closeBtn} onClick={() => onClose(item.id)}>
          <img src={closeBtnIcon} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Alert;
