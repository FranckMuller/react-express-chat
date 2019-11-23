import React from 'react';
import DialogItem from '../DialogItem/DialogItem';
import { getAllDialogs } from '../../api';

import styles from './DialogList.module.scss';

const DialogList = ({ dialogs }) => {
  getAllDialogs();
  return (
    <div className={styles.dialogList}>
      {dialogs && !dialogs.length > 0 ? (
        <ul>
          <li>
            {dialogs.map(dialog => (
              <DialogItem
                key={dialog.id}
                user={dialog.user}
                message={dialog.lastMessage}
                messageCount={dialog.messageCount}
                isOwn={dialog.isOwn}
              />
            ))}
          </li>
        </ul>
      ) : (
        <div>У вас нет активных диалогов</div>
      )}
    </div>
  );
};

export default DialogList;
