import React from 'react';
import LoginBox from '../../components/Login-components/LoginBox/LoginBox';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import './responsive.css';

const Login = () => {
  return (
    <div className='Login-page'>
      <Navbar />
      <LoginBox />
    </div>
  )
}

export default Login