import React, { useState } from 'react';
import { useFormik, FormikValues } from 'formik';
import { validateForm } from '../../utils';
import LoginForm from './LoginForm';
import { connect, MapDispatchToProps } from 'react-redux';
import { fetchAuth } from '../../redux/actions';
import { SignInData } from '../../api/auth';

// TODO add eventhandler for click enter

export interface LoginFormDispatchProps {
  onFetchAuth: (data: SignInData) => any;
}

const LoginFormContainer: React.FC<LoginFormDispatchProps> = ({ onFetchAuth }) => {
  const [isLoading, toggleLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      loginValue: '',
      password: ''
    },
    validate: (values: FormikValues) => validateForm(values, { isAuth: true }),
    onSubmit: async (values: SignInData) => {
      onFetchAuth(values).finally(() => {
        console.log(1);
      });
    }
  });

  return <LoginForm {...formik} />;
};

const dispatchProps: MapDispatchToProps<LoginFormDispatchProps, {}> = {
  onFetchAuth: fetchAuth
};

export default connect(null, dispatchProps)(LoginFormContainer);
