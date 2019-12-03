import React from 'react';
import { useFormik } from 'formik';
import { validateForm } from '../../utils';
import { NavLink } from 'react-router-dom';

const LoginForm = props => {
  const formik = useFormik({
    initialValues: {
      loginValue: '',
      password: ''
    },
    validate: values => validateForm(values, { isAuth: true }),
    onSubmit: values => {
      console.log('on submit');
    }
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <div className="auth-form">
      <h3 className="form-title">Вход</h3>
      <p className="form-description">Пожалуйста войдите в аккаунт</p>
      <form onSubmit={formik.handleSubmit}>
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
