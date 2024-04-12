import { GeneralForm } from '../GeneralForm';

export const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <GeneralForm type="registration" initialValuesRegister={initialValues} />
  );
};
