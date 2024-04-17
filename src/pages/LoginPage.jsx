import { useSelector } from 'react-redux';

import { selectIsLoading } from '../redux/contacts/selectors';

import { LoginForm } from '../components/Forms/LoginForm/LoginForm';
import { Loader } from '../components/Loader/Loader';

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return <>{isLoading ? <Loader /> : <LoginForm />}</>;
};

export default LoginPage;
