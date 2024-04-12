import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('required!'),
  email: Yup.string().email('Invalid email').required('required!'),
  password: Yup.string()

    .min(6, 'Password must contain at least 6 symbols!')
    .required('required!'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('required!'),
  password: Yup.string()

    .min(6, 'Password must contain at least 6 symbols!')
    .required('required!'),
});
