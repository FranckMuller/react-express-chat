import React, { Fragment } from 'react';
import SuccessAuth from '../SuccessAuth/SuccessAuth';
import { NavLink } from 'react-router-dom';

const AuthForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  const isAuthed = false;

  return (
    <Fragment>
      {!isAuthed ? (
        <div className="auth-form">
          <h3 className="form-title">Регистрация</h3>
          <p className="form-description">Пожалуйста создайте аккаунт</p>
          <form onSubmit={handleSubmit}>
            <div
              className={`auth-form-group ${
                touched.email && errors.email ? 'error' : (touched.email && !errors.email && 'success') || ''
              }`}
            >
              <label>Ваш email</label>
              <input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" />
              {touched.email && errors.email && <span className="auth-form-notice">{errors.email}</span>}
            </div>
            <div
              className={`auth-form-group ${
                touched.name && errors.name ? 'error' : (touched.name && !errors.name && 'success') || ''
              }`}
            >
              <label>Ваше имя</label>
              <input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" />
              {touched.name && errors.name && <span className="auth-form-notice">{errors.name}</span>}
            </div>
            <div
              className={`auth-form-group ${
                touched.password && errors.password
                  ? 'error'
                  : (touched.password && !errors.password && 'success') || ''
              }`}
            >
              <label>Введите пароль</label>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
              />
              {touched.password && errors.password && <span className="auth-form-notice">{errors.password}</span>}
            </div>
            <div
              className={`auth-form-group ${
                touched.repeatPassword && errors.repeatPassword
                  ? 'error'
                  : (touched.repeatPassword && !errors.repeatPassword && 'success') || ''
              }`}
            >
              <label>Повторите пароль</label>
              <input
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="repeatPassword"
              />
              {touched.repeatPassword && errors.repeatPassword && (
                <span className="auth-form-notice">{errors.repeatPassword}</span>
              )}
            </div>
            <div className="auth-form-btn">
              <button onClick={handleSubmit} type="submit">
                Зарегистрироваться
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
    </Fragment>
  );
};

export default AuthForm;
