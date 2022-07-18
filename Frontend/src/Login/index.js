import React, { useState } from 'react';
import './styles.css';
import { auth } from '../firebase';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loginFail, setLoginFail} = useState(false);
  console.log('LOGIN PAGE OMG');

  const onChangeEmail = (event) => {
    setLoginEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onLogin = async(e) => {
    e.preventDefault();

    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, password);
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <div className="login">
      <h1 className="welcome-text">Welcome to fakebook!</h1>
      <form className="form">
        <input className="text-input" type="text" name="username" placeholder="Email address" value={loginEmail} onChange={onChangeEmail} />
        <input className="text-input" type="password" name="password" placeholder="Password" value={password} onChange={onChangePassword} />
        
        {loginFail ? <label style={{ color: '#555' }}>Incorrect email/password</label> : null}
        <input className="sign-in-button" type="submit" value="Sign In" onClick={onLogin} />
      </form>
    </div>
  )
}

export default Login;
