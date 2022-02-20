import React, {useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const UserAuth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  const clientId = '990023269050-ebf20ubth20hq78qv2gbnpcdbj6fj1u3.apps.googleusercontent.com';

  const onLoginSuccess = res => {
    console.log('Login Success:', res);
    setShowLogin(false);
    setShowLogout(true);
  }

  const onLoginFailure = () => {
    console.log('Login Failed:', res);
  }

  const onLogoutSuccess = () => {
    console.log('Logged out successfully');
    setShowLogin(true);
    setShowLogout(false);
  }

  return (
    <div>
      { showLogin && 
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      }
      { showLogout && <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      />}
    </div>
  );
}

export default UserAuth;
