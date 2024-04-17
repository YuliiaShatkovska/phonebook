import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'too short!')
    .max(70, 'too long!')
    .required('required!'),
  email: Yup.string().email('invalid email').required('required!'),
  password: Yup.string()

    .min(6, 'password must contain at least 6 symbols!')
    .required('required!'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('invalid email').required('required!'),
  password: Yup.string()

    .min(6, 'password must contain at least 6 symbols!')
    .required('required!'),
});

export const AddContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'too short!')
    .max(70, 'too long!')
    .required('required!'),
  number: Yup.string().required('required!'),
  email: Yup.string().email(),
  favorite: Yup.boolean(),
});

export const EditContactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'too short!').max(70, 'too long!'),
  number: Yup.string(),
  email: Yup.string().email(),
  favorite: Yup.boolean(),
});
