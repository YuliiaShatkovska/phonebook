import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { EyeBtn } from 'components/EyeBtn/EyeBtn.styled';

export const EyeButton = ({ isShowedPassword, onClick }) => {
  return (
    <EyeBtn type="button" onClick={onClick}>
      {isShowedPassword ? (
        <BsEyeSlash style={{ fill: '#c0bfbf' }} size={20} />
      ) : (
        <BsEye style={{ fill: '#c0bfbf' }} size={20} />
      )}
    </EyeBtn>
  );
};
