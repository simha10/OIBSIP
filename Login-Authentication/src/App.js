import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './InitialPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoginSuccess from './LoginSuccess';
import RegisterSuccess from './RegisterSuccess';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
