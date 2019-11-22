import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

  return (
    <div className="auth-form">
      <h3 className="form-title">Вход</h3>
      <p className="form-description">Пожалуйста войдите в аккаунт</p>
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
            touched.password && errors.password ? 'error' : (touched.password && !errors.password && 'success') || ''
          }`}
        >
          <label>Введите пароль</label>
          <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name="password" />
          {touched.password && errors.password && <span className="auth-form-notice">{errors.password}</span>}
        </div>
        <div className="auth-form-btn">
          <button onClick={handleSubmit} type="submit">
            Войти
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
