import { NextPage } from 'next';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { RegisterForm } from '../../components';
import { Member } from '../../utils';

const SignUp: NextPage = () => {
  // const signUpSubmit = useMutation({
  //   mutationFn: (email: string, nickName: string, passwordCheck: string) => {
  //     return Member.signUp(email, nickName, passwordCheck);
  //   },
  // });

  // signUpSubmit.mutate({
  //   email: registerFormState.inputEmail.email,
  //   nickname: registerFormState.inputEmail.nickName,
  //   password: registerFormState.inputPassword.passwordCheck,
  // });

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
