import React, { useState, useEffect } from 'react';
import './styles.css';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFail, setLoginFail] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token !== "null") {
      window.location.href = '/';
    }
  }, []);

  const onChangeEmail = (event) => {
    setLoginEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onLogin = async(e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, password);
      const token = (await user).user.accessToken;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', loginEmail);
        setLoading(false);
        setLoginFail(false);
        window.location.href = "/";
      }
    } catch(error) {
      setLoginFail(true);
      setLoading(false);
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="login">
        <h1 className="welcome-text">Welcome to fakebook!</h1>
        <form className="form">
          <input className="text-input" type="text" name="username" placeholder="Email address" value={loginEmail} onChange={onChangeEmail} />
          <input className="text-input" type="password" name="password" placeholder="Password" value={password} onChange={onChangePassword} />
          
          {loginFail ? <label style={{ color: '#555' }}>Incorrect email/password</label> : null}
          <input className="sign-in-button" type="submit" value="Sign In" onClick={onLogin} />
        </form>
      </div>
    </div>
  )
}

export default Login;
