

import React, { useState } from 'react';

const SignupPage = ({ setCurrentPage, handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handleSignup(email, password);
      setCurrentPage('Home'); // Redirect on mock success
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-white">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create a New Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          <p className="text-center mt-4">
            <button 
              type="button" 
              className="text-sm link link-hover"
              onClick={() => setCurrentPage('Login')}
            >
              Already have an account? Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;