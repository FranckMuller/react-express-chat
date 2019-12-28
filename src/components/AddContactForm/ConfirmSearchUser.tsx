import React from 'react';

import styles from './AddContactForm.module.scss';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
} | null;

type ConfirmSearchUserProps = {
  user: User;
};

const ConfirmSearchUser: React.FC<ConfirmSearchUserProps> = ({ user = null }) => (
  <div className={styles.confirmSearch}>
    <h3 className={styles.title}>Отправте приглашение</h3>
    <div className={styles.user}>
      {user && (
        <>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
          <span>{user.login}</span>
        </>
      )}
    </div>
    <button className={styles.btn}>Добавить</button>
  </div>
);

export default ConfirmSearchUser;
