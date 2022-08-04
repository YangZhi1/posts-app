import React from 'react';
import Login from './Login';
import Homepage from './Homepage';
import './styles.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './Chat';

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
