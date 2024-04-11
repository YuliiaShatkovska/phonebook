import { lazy } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={'home'} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={'login'} />
        <Route path="contacts" element={'contacts'} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
