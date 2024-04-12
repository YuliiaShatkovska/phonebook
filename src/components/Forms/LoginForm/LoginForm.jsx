import { GeneralForm } from '../GeneralForm';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return <GeneralForm type="login" initialValuesLogin={initialValues} />;
};
