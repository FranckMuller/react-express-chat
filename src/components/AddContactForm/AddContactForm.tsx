import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ConfirmSearchUser, { User } from './ConfirmSearchUser';
import SearchContactForm, { SearchContactFormProps } from './SearchContactForm';

import styles from './AddContactForm.module.scss';

export interface AddContactFormProps extends SearchContactFormProps {
  isShowSearch: boolean;
  isShowConfirm: boolean;
  onShowConfirm: () => void;
  desiredUser: User;
}

const AddContactForm: React.FC<AddContactFormProps> = ({
  byFindValue,
  onChangeSearchInput,
  onClickSearchButton,
  isShowSearch,
  isShowConfirm,
  onShowConfirm,
  desiredUser
}) => {
  return (
    <div className={styles.addContactForm}>
      <CSSTransition
        classNames={{
          exitActive: styles.searchFormExit
        }}
        in={isShowSearch}
        unmountOnExit
        timeout={500}
        onExited={onShowConfirm}
      >
        <SearchContactForm
          onClickSearchButton={onClickSearchButton}
          byFindValue={byFindValue}
          onChangeSearchInput={onChangeSearchInput}
        />
      </CSSTransition>

      <CSSTransition
        classNames={{
          enterActive: styles.confirmSearchEnter
        }}
        in={isShowConfirm}
        unmountOnExit
        mountOnEnter
        timeout={500}
      >
        <ConfirmSearchUser user={desiredUser} />
      </CSSTransition>
    </div>
  );
};

export default AddContactForm;
