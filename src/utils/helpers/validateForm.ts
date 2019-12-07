import { FormikValues } from 'formik';

const validateForm = (values: FormikValues, { isAuth } = { isAuth: false }) => {
  const errors: { [key: string]: string } = {};
  if (!isAuth) {
    if (!values.firstName) {
      errors.firstName = 'Введите ваше имя';
    }

    if (!values.lastName) {
      errors.lastName = 'Введите вашу фамилию';
    }

    if (!values.email) {
      errors.email = 'Введите ваш email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный формат email';
    }

    if (!values.login) {
      errors.login = 'Введите ваш логин';
    } else if (values.login.length < 5) {
      errors.login = 'Логин должен содержать более 4 символов';
    }

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (values.password.length <= 7) {
      errors.password = 'Пароль должен состоять более чем из 7 символов';
    } else if (!values.password.match(/^[a-zA-Z0-9]+$/)) {
      errors.password = 'Пароль должен состоять из латинских символов';
    } else if (!values.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)) {
      errors.password = 'Пароль должен содержать заглавные буквы и числа';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Повторите пароль';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Пароли не совпадают';
    }
  } else {
    if (!values.loginValue) {
      errors.loginValue = 'Введите ваш логин или email';
    }
    if (!values.password) {
      errors.password = 'Введите ваш пароль';
    }
  }

  return errors;

  // const rules = {
  //   name: () => {
  //     if (!values.name) {
  //       errors.name = 'Введите ваше имя';
  //     }
  //   },

  //   surname: () => {
  //     if (!values.surname) {
  //       errors.surname = 'Введите вашу фамилию';
  //     }
  //   },

  //   email: () => {
  //     if (!values.email) {
  //       errors.email = 'Введите ваш email';
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //       errors.email = 'Неверный формат email';
  //     }
  //   },

  //   login: () => {
  //     if (!values.login) {
  //       errors.login = 'Введите ваше логин';
  //     } else if (values.login.length < 5) {
  //       errors.login = 'Логин должен содержать более 4 символов';
  //     }
  //   },

  //   password: () => {
  //     if (!values.password) {
  //       errors.password = 'Введите пароль';
  //     } else if (values.password.length <= 7 && isAuth) {
  //       errors.password = 'Пароль должен содержать более 7 символов';
  //     }
  //   },

  //   repeatPassword: () => {
  //     if (!values.repeatPassword) {
  //       errors.repeatPassword = 'Повторите пароль';
  //     } else if (values.repeatPassword !== values.password) {
  //       errors.repeatPassword = 'Пароли не совпадают';
  //     }
  //   }
  // };

  // Object.keys(values).forEach(key => rules[key] && rules[key]());
};

export default validateForm;
