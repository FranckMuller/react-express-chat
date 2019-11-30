import React from 'react';
import MessageItem from '../MessageItem/MessageItem';

import styles from './MessageList.module.scss';

import audio from '../../assets/audio/1.mp3';

const MessageList = () => {
  return (
    <ul className={styles.messageList}>
      <li>
        <MessageItem
          id="gw1wserqbfs1"
          user={{
            id: 'gw1wserqbfs1',
            name: 'Димасик красавчик',
            avatar: 'https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1',
            isOnline: true
          }}
          message={{
            text: 'Привет, как дела?',
            isChecked: true,
            createdAt: '2019-10-11T12:30:12'
          }}
          isOwn
        />
      </li>

      <li>
        <MessageItem
          id="zbkwserqbfs2"
          user={{
            id: 'zbkwserqbfs2',
            name: 'Доктор Пуклюк',
            avatar: 'https://sun1.velcom-by-minsk.userapi.com/c855128/v855128041/d9717/SVgOknzY-5g.jpg?ava=1',
            isOnline: true
          }}
          message={{
            text: 'Привет, у меня все в парлядке!',
            createdAt: '2019-10-11T12:30:12',
            attachments: [
              {
                id: 1,
                fileName: 'attach.png',
                src: 'https://picsum.photos/50/50?random=3'
              },
              {
                id: 2,
                fileName: 'attach.png',
                src: 'https://picsum.photos/50/50?random=4'
              }
            ]
          }}
        />
      </li>

      <li>
        <MessageItem
          id="gw1wserqbfs1"
          user={{
            id: 'gw1wserqbfs1',
            name: 'Димасик красавчик',
            avatar: 'https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1',
            isOnline: true
          }}
          message={{
            text: 'Зырь крутые фотки',
            createdAt: '2019-10-11T12:35:12',
            isChecked: true,
            attachments: [
              {
                id: 1,
                fileName: 'attach.png',
                src: 'https://picsum.photos/50/50?random=1'
              },
              {
                id: 2,
                fileName: 'attach.png',
                src: 'https://picsum.photos/50/50?random=2'
              },
              {
                id: 3,
                fileName: 'attach.png',
                src: 'https://picsum.photos/50/50?random=5'
              }
            ]
          }}
          isOwn
        />
      </li>

      <li>
        <MessageItem
          id="zbkwserqbfs2"
          user={{
            id: 'zbkwserqbfs2',
            name: 'Доктор Пуклюк',
            avatar: 'https://sun1.velcom-by-minsk.userapi.com/c855128/v855128041/d9717/SVgOknzY-5g.jpg?ava=1',
            isOnline: true
          }}
          message={{
            createdAt: '2019-10-11T12:55:12',
            audio: audio
          }}
        />
      </li>

      <li>
        <MessageItem
          user={{
            id: 'zbkwserqbfs2',
            name: 'Доктор Пуклюк',
            avatar: 'https://sun1.velcom-by-minsk.userapi.com/c855128/v855128041/d9717/SVgOknzY-5g.jpg?ava=1',
            isOnline: true
          }}
          message={{
            isTyping: true
          }}
        />
      </li>
    </ul>
  );
};

export default MessageList;
