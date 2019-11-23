import React from 'react';
import DialogItem from '../DialogItem/DialogItem';

import styles from './DialogList.module.scss';

const DialogList = () => {
  const dialogs = [
    {
      id: 'gw1wserqbfs1',
      user: {
        id: 'gw1wserqbfs1',
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
      id: 'zbkwserqbfs2',
      user: {
        id: 'zbkwserqbfs2',
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
      id: '12owserqbfs3',
      user: {
        id: '12owserqbfs3',
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
      id: 'pn10wserqbfs4',
      user: {
        id: 'pn10wserqbfs4',
        name: 'мистер аноним',
        isOnline: true
      },
      lastMessage: {
        text: 'Умпа:? думпа!',
        createdAt: '2019-11-21T12:30:12'
      },
      messageCount: 123
    },

    {
      id: 'gw1wserqbfs',
      user: {
        id: 'gw1wserqbfs',
        name: 'Доктор кто',
        isOnline: false
      },
      lastMessage: {
        text: 'Аудюха топ',
        createdAt: '2019-08-11T11:30:30'
      },
      messageCount: 10
    },

    {
      id: 'zbkwserqbfs',
      user: {
        id: 'zbkwserqbfs',
        name: 'Никита Булыжник',
        isOnline: true
      },
      lastMessage: {
        text: 'Шикарно, спасибо',
        createdAt: '2019-09-11T11:30:32'
      },
      messageCount: 2
    },

    {
      id: '12owserqbfs',
      user: {
        id: '12owserqbfs',
        name: 'Саша Панда',
        isOnline: true
      },
      lastMessage: {
        text: 'Я хочу к тебе в команду, ты мега крутой',
        createdAt: '2019-11-23T12:30:32'
      }
    },

    {
      id: '658wserqbfs',
      user: {
        id: '658wserqbfs',
        name: 'Алена Гулькевич'
      },
      lastMessage: {
        text: 'может быть ты хочешь спросить меня о чем-нибудь? если так то пиши',
        createdAt: '2019-11-23T12:30:32'
      },
      messageCount: 1
    },

    {
      id: 'hrtewserqbfs',
      user: {
        id: 'hrtewserqbfs',
        name: 'Всем привет',
        isOnline: true
      },
      lastMessage: {
        text: 'Привет, погнали завтра куда нибудть затусим как никогда',
        createdAt: '2019-11-23T12:30:32'
      }
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
