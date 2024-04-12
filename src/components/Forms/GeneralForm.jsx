import { Container } from 'components/App/App.styled';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Notiflix from 'notiflix';
import {
  ContentWrap,
  FormBtn,
  FormTitle,
  FormWrap,
  Input,
  InputLabel,
  InputWrap,
} from './GeneralForm.styled';

import { EyeButton } from 'components/EyeBtn/EyeBtn';
import { loginUser, registerUser } from '../../redux/auth/operations';
import { LoginSchema, RegisterSchema } from '../../helpers/schemas/Schemas';
import '../../helpers/notiflix/notiflix';

export const GeneralForm = ({
  type,
  initialValuesLogin,
  initialValuesRegister,
}) => {
  const [isShowedPassword, setIsShowedPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e, { resetForm }) => {
    if (type === 'registration') {
      Notiflix.Notify.success('Thank you for registration! ');

      dispatch(registerUser(e));
    }

    if (type === 'login') {
      dispatch(loginUser(e));
    }

    resetForm();
  };

  const toggleShowPassword = () => {
    setIsShowedPassword(!isShowedPassword);
  };

  return (
    <Container>
      <ContentWrap>
        <FormTitle>{type === 'login' ? 'Log In' : 'Sing up'}</FormTitle>

        <Formik
          initialValues={
            type === 'registration' ? initialValuesRegister : initialValuesLogin
          }
          validationSchema={
            type === 'registration' ? RegisterSchema : LoginSchema
          }
          onSubmit={handleSubmit}
        >
          <FormWrap>
            {type === 'registration' && (
              <InputWrap>
                <InputLabel htmlFor="user-name">Name</InputLabel>
                <Input id="user-name" name="name" placeholder="Kate" />

                <ErrorMessage component="div" name="name" />
              </InputWrap>
            )}

            <InputWrap>
              <InputLabel htmlFor="user-email">Email</InputLabel>
              <Input
                id="user-email"
                name="email"
                type="email"
                placeholder="kate@test.com"
              />

              <ErrorMessage component="div" name="email" />
            </InputWrap>

            <InputWrap>
              <InputLabel htmlFor="user-password">Password</InputLabel>
              <Input
                id="user-password"
                name="password"
                type={isShowedPassword ? 'text' : 'password'}
                placeholder="********"
              />

              <EyeButton
                isShowedPassword={isShowedPassword}
                onClick={toggleShowPassword}
              />

              <ErrorMessage component="div" name="password" />
            </InputWrap>

            <FormBtn type="submit">Sign up</FormBtn>
          </FormWrap>
        </Formik>
      </ContentWrap>
    </Container>
  );
};
