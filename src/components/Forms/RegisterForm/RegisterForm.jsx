import { Container } from 'components/App/App.styled';
import { Formik } from 'formik';

import Notiflix from 'notiflix';
import { ContentWrap, FormWrap, Input, InputWrap } from '../Forms.styled';

Notiflix.Notify.init({
  width: '260px',
  position: 'center-top',
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: 'Montserrat',
  fontAwesomeIconSize: '30px',
  success: {
    background: '#7be8ea',
    textColor: '#1a1a1a',
  },
});

export const RegisterForm = () => {
  const handleSubmit = (e, { resetForm }) => {
    console.log(e);
    Notiflix.Notify.success('Thank you for registration! ');

    // resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <Container>
      <ContentWrap>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormWrap>
            <InputWrap>
              <label htmlFor="user-name">Name</label>
              <Input
                id="user-name"
                name="name"
                placeholder="Kate"
                // type="text"
                // onChange={handleChange}
                // value={name}
                required
              />
            </InputWrap>

            <InputWrap>
              <label htmlFor="user-email">Email</label>
              <Input
                id="user-email"
                name="email"
                type="email"
                placeholder="kate@test.com"
                // onChange={handleChange}
                // value={email}
                required
              />
            </InputWrap>

            <InputWrap>
              <label htmlFor="user-password">Password</label>
              <Input
                id="user-password"
                name="password"
                type="password"
                placeholder="********"
                // onChange={handleChange}
                // value={password}
                required
              />
            </InputWrap>

            <button type="submit">Sign up</button>
          </FormWrap>
        </Formik>
      </ContentWrap>
    </Container>
  );
};
