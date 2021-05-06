import React from 'react';

import LoginForm from '../../components/logInForm';
import CustomTitle from '../../components/common/Title';

const LoginPage = () => (
  <div className="login">
    <div className="loginBody">
      <CustomTitle text="Log In" />
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
