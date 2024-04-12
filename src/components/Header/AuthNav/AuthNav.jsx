import { CiLogin } from 'react-icons/ci';
import { HeaderLink } from '../Header.styled';

export const AuthNav = () => {
  return (
    <>
      <HeaderLink to="register">Sign up</HeaderLink>
      <HeaderLink
        to="login"
        style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
      >
        Log in <CiLogin size={24} />
      </HeaderLink>
    </>
  );
};
