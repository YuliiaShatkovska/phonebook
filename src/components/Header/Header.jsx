import { ImHome } from 'react-icons/im';
import { CiLogin } from 'react-icons/ci';
import { HeaderBox, HeaderLink, LinksBox } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <LinksBox>
        <HeaderLink to="/">
          <ImHome size={24} />
        </HeaderLink>
        <HeaderLink to="contacts">Contacts</HeaderLink>
      </LinksBox>

      <LinksBox>
        <HeaderLink to="register">Sign up</HeaderLink>
        <HeaderLink
          to="login"
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          Log in <CiLogin size={24} />
        </HeaderLink>
      </LinksBox>
    </HeaderBox>
  );
};
