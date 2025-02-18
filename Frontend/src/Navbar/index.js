import React from 'react';
import './styles.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const onLogout = () => {
    signOut(auth).then(() => {
      localStorage.setItem('token', null);
      localStorage.setItem('email', null);
      window.location.href = '/login';
    }).catch((error) => {
      console.log('Error:', error);
    });
  }
  
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="posts">Posts</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/chat">Chat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={onLogout} >Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
