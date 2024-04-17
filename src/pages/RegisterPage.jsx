import { useSelector } from 'react-redux';

import { selectIsLoading } from '../redux/contacts/selectors';

import { RegisterForm } from '../components/Forms/RegisterForm/RegisterForm';
import { Loader } from '../components/Loader/Loader';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return <>{isLoading ? <Loader /> : <RegisterForm />}</>;
};

export default RegisterPage;
