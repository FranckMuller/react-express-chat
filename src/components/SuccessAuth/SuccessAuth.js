import React from 'react';

import successIcon from '../../assets/icons/success.svg';

const SuccessAuth = () => (
  <div className="d-flex flex-column justify-content-center align-items-center pt-5">
    <div className="w-25 p-5">
      <img src={successIcon} alt="success" className="m-auto" />
    </div>
    <h3 className="text-center">Вы зарегестрировались</h3>
    <p className="text-center">
      На ваш email выслано письмо, проверьте почту и перейдите по ссылке для подтверждения аккаунта.
    </p>
  </div>
);

export default SuccessAuth;
