import React from 'react';
import { useNavigate } from 'react-router-dom';

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <p className="initialHeading">Already have an ACCOUNT?</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <p>Don't have an ACCOUNT?</p>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default InitialPage;
