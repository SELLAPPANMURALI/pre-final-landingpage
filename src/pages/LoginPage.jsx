import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <StarBackground />
      <div className="login-wrapper">
        <motion.div
          className="login-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-center mb-4">🚀 Space Zone Login</h2>
          <form>
            <div className="mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-dark">Login</button>
            </div>

            <div className="text-center">
              Don't have an account? <Link to="/register" className="register-link">Register</Link>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
