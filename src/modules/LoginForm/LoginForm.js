import { withFormik } from 'formik';
import { LoginForm } from '../../components';
import { validateForm } from '../../utils';

const LoginFormModule = withFormik({
  mapPropsToValues: props => {
    return {
      email: '',
      password: ''
    };
  },

  validate: values => {
    const errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm'
})(LoginForm);

export default LoginFormModule;
