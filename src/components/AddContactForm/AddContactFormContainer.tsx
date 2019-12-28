import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import { getUser } from '../../api/user';
import { connect } from 'react-redux';
import { updateAlertState } from '../../redux/alert/actions';
import { User } from './ConfirmSearchUser';

type DispatchProps = {
  onSetAlert: (type: string, message: string) => void;
};

const AddContactFormContainer: React.FC<DispatchProps> = ({ onSetAlert }) => {
  const [byFindValue, changeByFindValue] = useState<string>('');
  const [desiredUser, setDesiredUser] = useState<User | null>(null);
  const [isShowSearch, toggleSearch] = useState<boolean>(true);
  const [isShowConfirm, toggleConfirm] = useState<boolean>(false);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeByFindValue(e.target.value);
  };

  const onSearchContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!byFindValue.length) {
      onSetAlert('warning', 'Введите логин или email');
      return;
    }
    getUser(byFindValue)
      .then(res => {
        setDesiredUser(res.data.user);
        toggleSearch(false);
      })
      .catch(err => {
        if (!err.response) {
          onSetAlert('error', 'Ошибка сети, повторите попытку позже');
        } else {
          onSetAlert('error', err.response.data.message);
        }
      });
  };

  const onShowConfirm = () => {
    toggleConfirm(true);
  };

  return (
    <AddContactForm
      onClickSearchButton={onSearchContact}
      byFindValue={byFindValue}
      onChangeSearchInput={onChangeSearchInput}
      isShowSearch={isShowSearch}
      isShowConfirm={isShowConfirm}
      onShowConfirm={onShowConfirm}
      desiredUser={desiredUser}
    />
  );
};

const mapDispatchToProps = {
  onSetAlert: updateAlertState
};

export default connect(null, mapDispatchToProps)(AddContactFormContainer);
