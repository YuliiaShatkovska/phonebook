import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshed = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshed;

  return shouldRedirect ? <Navigate to="/login" /> : children;
};
