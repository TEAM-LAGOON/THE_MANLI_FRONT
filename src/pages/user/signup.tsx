import { NextPage } from 'next';
import { useState } from 'react';
import { RegisterForm } from '../../components';

const SignUp: NextPage = () => {
  const [registerFormState, setRegisterFormState] = useState({
    agreeToTerms: {
      0: false,
      1: false,
      2: false,
      pass: false,
    },
    inputEmail: { email: '', emailPass: false, nickName: '', nickNamePass: false },
    inputPassword: {
      password: '',
      passwordPass: false,
      passwordCheck: '',
      passwordCheckPass: false,
    },
  });
  const RegisterFormProps = {
    registerFormState: registerFormState,
    setRegisterFormState: setRegisterFormState,
  };

  return <RegisterForm {...RegisterFormProps} />;
};

export default SignUp;
