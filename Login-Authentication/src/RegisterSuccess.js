import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2>Registration Successful</h2>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
};

export default RegisterSuccess;
