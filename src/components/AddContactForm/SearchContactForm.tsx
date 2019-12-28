import React from 'react';

import styles from './AddContactForm.module.scss';

export type SearchContactFormProps = {
  byFindValue: string;
  onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SearchContactForm: React.FC<SearchContactFormProps> = ({
  byFindValue,
  onChangeSearchInput,
  onClickSearchButton
}) => {
  return (
    <form action="">
      <h3 className={styles.title}>Поиск контакта</h3>
      <div className={styles.inputGroup}>
        <label>Введите логин или email для поиска</label>
        <input
          onChange={onChangeSearchInput}
          value={byFindValue}
          type="text"
          placeholder="Логин или email"
        />
        <button onClick={onClickSearchButton} className={styles.btn}>
          Поиск контакта
        </button>
      </div>
    </form>
  );
};

export default SearchContactForm;
