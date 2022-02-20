import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetData from './GetData';

const Addon = () => {
  const [showLogin, setShowLogin] = useState(window.sessionStorage.getItem('user') ? false : true);
  const [showLogout, setShowLogout] = useState(
    window.sessionStorage.getItem('user') ? true : false
  );

  const clientId = '990023269050-ebf20ubth20hq78qv2gbnpcdbj6fj1u3.apps.googleusercontent.com';

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res);
    const clone = JSON.stringify(res);
    window.sessionStorage.setItem('user', clone);
    toast.success('Login Success');
    setShowLogin(false);
    setShowLogout(true);
  };

  const onLoginFailure = () => {
    toast.error('Login Success');
  };

  const onLogoutSuccess = () => {
    window.sessionStorage.removeItem('user');
    toast.success('Logged out successfully');
    setShowLogin(true);
    setShowLogout(false);
  };

  return (
    <div>
      <div className="heading">
        <h1>Welcome to Spreadsheet Add-on</h1>
      </div>
      <div className="buttonContainer">
        {showLogin && (
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
        )}
        {showLogout && (
          <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onLogoutSuccess} />
        )}
        <GetData isButtonDisabled={showLogin} />
      </div>
      <div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Addon;
