import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { CiLogout } from 'react-icons/ci';
import { LogoutButton, UserText } from './UserNav.styled';
import { logoutUser } from '../../../redux/auth/operations';

export const UserNav = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      <UserText>Welcome, {name}!</UserText>
      <LogoutButton type="button" onClick={() => dispatch(logoutUser())}>
        <CiLogout size={24} />
      </LogoutButton>
    </>
  );
};
