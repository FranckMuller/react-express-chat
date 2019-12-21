import React, { useState } from 'react';
import { useFormik, FormikValues } from 'formik';
import { validateForm } from '../../utils';
import LoginForm from './LoginForm';
import { connect, MapDispatchToProps } from 'react-redux';
import { authentication } from '../../redux/auth/actions';
import { SignInData } from '../../api/auth';

// TODO add eventhandler for click enter

export interface LoginFormDispatchProps {
  onAuthentication: (data: SignInData) => any;
}

const LoginFormContainer: React.FC<LoginFormDispatchProps> = ({ onAuthentication }) => {
  const [isLoading, toggleLoading]: [boolean, (value: boolean) => void] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      loginValue: '',
      password: ''
    },
    validate: (values: FormikValues) => validateForm(values, { isAuth: true }),
    onSubmit: async (values: SignInData) => {
      toggleLoading(true);
      onAuthentication(values).catch(() => {
        toggleLoading(false);
      });
    }
  });

  return <LoginForm {...formik} isLoading={isLoading} />;
};

const dispatchProps: MapDispatchToProps<LoginFormDispatchProps, {}> = {
  onAuthentication: authentication
};

export default connect(null, dispatchProps)(LoginFormContainer);
