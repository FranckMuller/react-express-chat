import { withFormik } from 'formik';
import { AuthForm } from '../../components';
import { validateForm } from '../../utils';

const AuthFormModule = withFormik({
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      name: ''
    };
  },

  validate: values => {
    const errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'AuthForm'
})(AuthForm);

export default AuthFormModule;
