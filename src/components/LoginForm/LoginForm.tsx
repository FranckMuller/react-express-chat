import React from 'react';
import { FormikProps } from 'formik';
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

type LoginFormProps = {
  isLoading: boolean;
};

const LoginForm: React.FC<FormikProps<any> & LoginFormProps> = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isLoading } = props;

  return (
    <div className="auth-form">
      <h3 className="form-title">Вход</h3>
      <p className="form-description">Пожалуйста войдите в аккаунт</p>
      <form onSubmit={handleSubmit}>
        <div
          className={`auth-form-group ${
            touched.loginValue && errors.loginValue
              ? 'error'
              : (touched.loginValue && !errors.loginValue && 'success') || ''
          }`}
        >
          <label>Введите ваш email или логин</label>
          <input value={values.loginValue} onChange={handleChange} onBlur={handleBlur} name="loginValue" />
          {touched.loginValue && errors.loginValue && <span className="auth-form-notice">{errors.loginValue}</span>}
        </div>
        <div
          className={`auth-form-group ${
            touched.password && errors.password ? 'error' : (touched.password && !errors.password && 'success') || ''
          }`}
        >
          <label>Введите пароль</label>
          <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name="password" />
          {touched.password && errors.password && <span className="auth-form-notice">{errors.password}</span>}
        </div>
        <div className="auth-form-btn">
          <button type="submit">
            Войти
            {isLoading && <Spinner />}
          </button>
        </div>
      </form>
      <NavLink className="auth-form-link" to="/signup">
        Регистрация
      </NavLink>
    </div>
  );
};

export default LoginForm;
