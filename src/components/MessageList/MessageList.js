import React from 'react';
import MessageItem from '../MessageItem/MessageItem';

import styles from './MessageList.module.scss';

import audio from '../../assets/audio/1.mp3';

const MessageList = () => {
  return (
    <ul className={styles.messageList}>
      <li>
        <MessageItem
          avatar="https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1"
          message="Привет, как дела?"
          createdAt="2019-10-11T12:30:12"
          attachments={[
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
          ]}
          isChecked
          isOwn
        />
      </li>
      <li>
        <MessageItem
          message="Привет, у меня все в парлядке!"
          createdAt="2019-10-11T12:30:12"
          avatar="https://sun2.velcom-by-minsk.userapi.com/c623616/v623616034/1c185/uEITfF8iLT8.jpg?ava=1"
          attachments={[
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
          ]}
        />
      </li>

      <li>
        <MessageItem
          message="ништяк"
          avatar="https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1"
          createdAt="2019-10-11T12:30:12"
          isChecked={false}
          isOwn
        />
      </li>

      <li>
        <MessageItem
          message="что робишь?"
          avatar="https://sun2.velcom-by-minsk.userapi.com/c623616/v623616034/1c185/uEITfF8iLT8.jpg?ava=1"
          createdAt="2019-11-21T12:50:12"
        />
      </li>

      <li>
        <MessageItem
          message="Да так, учу прогу"
          avatar="https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1"
          createdAt="2019-11-21T21:50:12"
          isChecked={false}
          isOwn
        />
      </li>

      <li>
        <MessageItem
          createdAt="2019-11-21T22:50:12"
          avatar="https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1"
          attachments={[
            {
              id: 1,
              fileName: 'attach.png',
              src: 'https://picsum.photos/300/300?random=3'
            }
          ]}
          isOwn
        />
      </li>

      <li>
        <MessageItem
          createdAt="2019-11-21T22:50:12"
          avatar="https://sun9-66.userapi.com/c844722/v844722338/1328f1/YSgEvGc5IOY.jpg?ava=1"
          isOwn
          audio={audio}
        />
      </li>

      <li>
        <MessageItem
          avatar="https://sun2.velcom-by-minsk.userapi.com/c623616/v623616034/1c185/uEITfF8iLT8.jpg?ava=1"
          audio={audio}
          createdAt="2019-11-22T00:50:12"
        />
      </li>

      <li>
        <MessageItem
          avatar="https://sun2.velcom-by-minsk.userapi.com/c623616/v623616034/1c185/uEITfF8iLT8.jpg?ava=1"
          isTyping
        />
      </li>
    </ul>
  );
};

export default MessageList;
