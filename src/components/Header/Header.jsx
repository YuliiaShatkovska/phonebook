import { ImHome } from 'react-icons/im';

import { HeaderBox, HeaderLink, LinksBox } from './Header.styled';
import { AuthNav } from '../Header/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserNav } from '../Header/UserNav/UserNav';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderBox>
      <LinksBox>
        <HeaderLink to="/">
          <ImHome size={24} />
        </HeaderLink>
        <HeaderLink to="contacts">Contacts</HeaderLink>
      </LinksBox>

      <LinksBox>{isLoggedIn ? <UserNav /> : <AuthNav />}</LinksBox>
    </HeaderBox>
  );
};
