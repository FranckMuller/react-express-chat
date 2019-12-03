import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { validateForm as validate } from '../../utils';
import { signUp } from '../../api';

import Spinner from '../Spinner/Spinner';
import Alert from '../Alert/Alert';

import styles from './AuthForm.module.scss';

const AuthForm = props => {
  const [isLoading, toggleLoading] = useState(false);
  const [isAuthed, toggleIsAuthed] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      login: ''
    },
    validate,
    onSubmit: values => {
      toggleLoading(true);
      signUp(values)
        .then(res => {
          toggleIsAuthed(true);
        })
        .catch(err => {
          let error;
          if (!err.response) {
            error = 'ошибка сети';
          } else {
            error = err.response.data.message;
          }
          setError(error);
        })
        .finally(() => {
          toggleLoading(false);
        });
    }
  });

  const clearError = () => {
    if (error) {
      setError(null);
    }
  };

  return (
    <div className={styles.AuthForm}>
      <div className="auth-form">
        <h3 className="form-title">Регистрация</h3>
        <p className="form-description">Пожалуйста создайте аккаунт</p>
        <form onSubmit={formik.handleSubmit}>
          <div
            className={`auth-form-group ${
              formik.touched.firstName && formik.errors.firstName
                ? 'error'
                : (formik.touched.firstName && !formik.errors.firstName && 'success') || ''
            }`}
          >
            <label>Ваше имя</label>
            <input
              value={formik.values.firstName}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              name="firstName"
              id="firstName"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <span className="auth-form-notice">{formik.errors.firstName}</span>
            )}
          </div>

          <div
            className={`auth-form-group ${
              formik.touched.lastName && formik.errors.lastName
                ? 'error'
                : (formik.touched.lastName && !formik.errors.lastName && 'success') || ''
            }`}
          >
            <label>Ваша фамилия</label>
            <input
              value={formik.values.lastName}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              name="lastName"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <span className="auth-form-notice">{formik.errors.lastName}</span>
            )}
          </div>

          <div
            className={`auth-form-group ${
              formik.touched.login && formik.errors.login
                ? 'error'
                : (formik.touched.login && !formik.errors.login && 'success') || ''
            }`}
          >
            <label>Ваш логин</label>
            <input
              value={formik.values.login}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              name="login"
            />
            {formik.touched.login && formik.errors.login && (
              <span className="auth-form-notice">{formik.errors.login}</span>
            )}
          </div>

          <div
            className={`auth-form-group ${
              formik.touched.email && formik.errors.email
                ? 'error'
                : (formik.touched.email && !formik.errors.email && 'success') || ''
            }`}
          >
            <label>Ваш email</label>
            <input
              value={formik.values.email}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              name="email"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="auth-form-notice">{formik.errors.email}</span>
            )}
          </div>

          <div
            className={`auth-form-group ${
              formik.touched.password && formik.errors.password
                ? 'error'
                : (formik.touched.password && !formik.errors.password && 'success') || ''
            }`}
          >
            <label>Введите пароль</label>
            <input
              value={formik.values.password}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
            />
            {formik.touched.password && formik.errors.password && (
              <span className="auth-form-notice">{formik.errors.password}</span>
            )}
          </div>
          <div
            className={`auth-form-group ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'error'
                : (formik.touched.confirmPassword && !formik.errors.confirmPassword && 'success') || ''
            }`}
          >
            <label>Повторите пароль</label>
            <input
              value={formik.values.confirmPassword}
              onChange={e => {
                formik.handleChange(e);
                clearError();
              }}
              onBlur={formik.handleBlur}
              type="password"
              name="confirmPassword"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span className="auth-form-notice">{formik.errors.confirmPassword}</span>
            )}
          </div>
          <div className="auth-form-btn">
            <button disabled={isLoading} onClick={formik.handleSubmit} type="submit">
              Зарегистрироваться
              {isLoading && <Spinner />}
            </button>
          </div>
        </form>
        <NavLink className="auth-form-link" to="/signin">
          Войти в аккаунт
        </NavLink>

        {isAuthed && <div>Вы успешно создали аккаунт, теперь вы можете войти в систему.</div>}
        {error && <Alert message={error} />}
      </div>
    </div>
  );
};
export default AuthForm;
