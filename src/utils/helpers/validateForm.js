const validateForm = ({ isAuth, values, errors }) => {
  const rules = {
    email: () => {
      if (!values.email) {
        errors.email = 'Введите ваш email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный формат email';
      }
    },

    name: () => {
      if (!values.name) {
        errors.name = 'Введите ваше имя';
      } else if (values.name.length <= 5) {
        errors.name = 'Имя должно содержать более 5 букв';
      }
    },

    password: () => {
      if (!values.password) {
        errors.password = 'Введите пароль';
      } else if (values.password.length <= 7 && isAuth) {
        errors.password = 'Пароль должен содержать более 7 символов';
      }
    },

    repeatPassword: () => {
      if (!values.repeatPassword) {
        errors.repeatPassword = 'Повторите пароль';
      } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = 'Пароли не совпадают';
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key]());
};

export default validateForm;
