import { NavLink } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import { HomeBox, HomeText, HomeTitle, HomeWrap } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrap>
      <Container>
        <HomeBox>
          <HomeTitle>CONTACTS</HomeTitle>

          <HomeText>
            To use this app you need to{' '}
            <NavLink to="login" style={{ color: '#61b3b5' }}>
              Log in
            </NavLink>{' '}
            or{' '}
            <NavLink to="register" style={{ color: '#61b3b5' }}>
              Sign up
            </NavLink>
            !
          </HomeText>
        </HomeBox>
      </Container>
    </HomeWrap>
  );
};

export default HomePage;
