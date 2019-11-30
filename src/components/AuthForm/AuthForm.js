import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { fetchAuth } from '../../redux/actions';
import { validateForm as validate } from '../../utils';
import SuccessAuth from '../SuccessAuth/SuccessAuth';
import Spinner from '../Spinner/Spinner';

import styles from './AuthForm.module.scss';

const AuthForm = props => {
  const [isLoading, toggleLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      login: ''
    },
    validate,
    onSubmit: values => {
      toggleLoading(true);
      props.onSubmit(values);
    }
  });

  const isAuthed = false;

  return (
    <div className={styles.AuthForm}>
      {!isAuthed ? (
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="firstName"
                id="firstName"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span className="auth-form-notice">{formik.errors.firstname}</span>
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
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
                formik.touched.repeatPassword && formik.errors.repeatPassword
                  ? 'error'
                  : (formik.touched.repeatPassword && !formik.errors.repeatPassword && 'success') || ''
              }`}
            >
              <label>Повторите пароль</label>
              <input
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                name="repeatPassword"
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                <span className="auth-form-notice">{formik.errors.repeatPassword}</span>
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
        </div>
      ) : (
        <SuccessAuth />
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(fetchAuth(data))
  };
};

export default connect(null, mapDispatchToProps)(AuthForm);
