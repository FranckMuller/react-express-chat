import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './ModalWindow.module.scss';
import ReactDOM from 'react-dom';

import closeIcon from '../../assets/icons/close-black.svg';

export interface ModalWindowProps {
  isShowed: boolean;
}

const ModalWindow: React.SFC<ModalWindowProps> = props => {
  const [isShowed, toggleShow] = useState<boolean>(false);

  useEffect(() => {
    if (props.children) {
      toggleShow(true);
    }
  }, [props.children]);

  const onClose = () => {
    toggleShow(false);
  };

  const modal = (
    <CSSTransition
      in={isShowed}
      timeout={800}
      classNames={{
        enterActive: styles.modalActiveEnter,
        exitActive: styles.modalActiveExit
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.modalWindow}>
        <div className={styles.modalWindowContent}>{props.children}</div>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    modal,
    window.document.getElementById('modalWindowWrapper') as HTMLElement
  );
};

export default ModalWindow;
