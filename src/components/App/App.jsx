import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';

import { Layout } from '../../components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // !isRefreshing && (
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={'home'} />
    //       <Route
    //         path="register"
    //         element={
    //           <PublicRoute>
    //             <RegisterPage />
    //           </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="login"
    //         element={
    //           <PublicRoute>
    //             <LoginPage />
    //           </PublicRoute>
    //         }
    //       />
    //       <Route
    //         path="contacts"
    //         element={
    //           <PrivateRoute>
    //             <ContactsPage />
    //           </PrivateRoute>
    //         }
    //       />
    //     </Route>

    //     <Route path="*" element={<Navigate to="/" replace />} />
    //   </Routes>
    // )

    isRefreshing ? (
      <Loader />
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
  );
};
