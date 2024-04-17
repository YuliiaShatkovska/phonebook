import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from 'react-icons/ci';

import { selectUser } from '../../../redux/auth/selectors';
import { logoutUser } from '../../../redux/auth/operations';

import { LogoutButton, UserText } from './UserNav.styled';

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
