import React from 'react';
import DialogItem from '../DialogItem/DialogItem';

import styles from './DialogList.module.scss';

const DialogList = () => {
  const dialogs = [
    {
      id: 1,
      user: {
        name: 'Димасик красавчик',
        avatar: 'https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1',
        isOnline: true
      },
      lastMessage: {
        text: 'Привет, как сам?',
        isChecked: false,
        createdAt: '2019-08-11T11:30:30'
      },
      isOwn: true
    },

    {
      id: 2,
      user: {
        name: 'Доктор Пуклюк',
        avatar: 'https://sun1.velcom-by-minsk.userapi.com/c855128/v855128041/d9717/SVgOknzY-5g.jpg?ava=1',
        isOnline: true
      },
      lastMessage: {
        text: 'Красава, впрочем я в тебе никогда не сомневался, ты все потянешь, Бог с тобой',
        isChecked: true,
        createdAt: '2019-09-11T11:30:32'
      },
      messageCount: 123
    },

    {
      id: 3,
      user: {
        name: 'Димасик красавчик',
        avatar: 'https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1',
        isOnline: true
      },
      lastMessage: {
        text: 'Привет, ну что, я стал гуру React и js, пора бы мне уже в крутую команду',
        isChecked: true,
        createdAt: '2019-11-21T22:30:32'
      },
      isOwn: true
    },

    {
      id: 4,
      user: {
        name: 'мистер аноним',
        isOnline: true
      },
      lastMessage: {
        text: 'Умпа:? думпа!',
        isChecked: false,
        createdAt: '2019-11-21T12:30:12'
      },
      messageCount: 123
    }
  ];

  return (
    <ul className={styles.dialogList}>
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
  );
};

export default DialogList;
