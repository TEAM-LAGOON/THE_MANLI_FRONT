import { NextPage } from 'next';
import { useState } from 'react';
import { ChangePassword } from '../../components';

const ChangePasswordPage: NextPage = () => {
  const [changePasswordState, setChangePasswordState] = useState({
    inputEmail: { email: '', emailPass: false },
    inputCertification: { certification: '', certificationPass: false },
    inputPassword: {
      password: '',
      passwordPass: false,
      passwordCheck: '',
      passwordCheckPass: false,
    },
  });
  const changePasswordProps = {
    changePasswordState: changePasswordState,
    setChangePasswordState: setChangePasswordState,
  };

  return <ChangePassword {...changePasswordProps} />;
};

export default ChangePasswordPage;
