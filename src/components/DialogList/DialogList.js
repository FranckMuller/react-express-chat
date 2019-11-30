import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DialogItem from '../DialogItem/DialogItem';
import { fetchDialogs } from '../../redux/actions/dialog';
import { selectDialogs } from '../../selectors/dialog';

import styles from './DialogList.module.scss';

const DialogList = ({ dialogs, getDialogs }) => {
  console.log(dialogs);
  useEffect(() => {
    getDialogs();
  }, []);

  useEffect(() => {}, [dialogs]);

  return (
    <div className={styles.dialogList}>
      {dialogs && dialogs.length > 0 ? (
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

const mapStateToProps = state => {
  const dialogs = selectDialogs(state);
  return {
    dialogs
  };
};

const mapDispatchToProps = dispatch => ({
  getDialogs: () => dispatch(fetchDialogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
