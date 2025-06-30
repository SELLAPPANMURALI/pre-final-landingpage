import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/sticky-navbar.css';    // Import the custom CSS!

const Navbar = () => {
  const location = useLocation();

  function closeNavMenu() {
    const el = document.querySelector('.navbar-collapse');
    if (el && el.classList.contains('show')) {
      const collapse = window.bootstrap && window.bootstrap.Collapse
        ? window.bootstrap.Collapse.getOrCreateInstance(el)
        : null;
      if (collapse) collapse.hide();
      else el.classList.remove('show');
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm sticky-navbar"
      /* No more inline bg or blur styles needed! */
    >
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center" href="https://www.spacezoneindia.com/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Space Zone India" height="40" className="me-2" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/" onClick={closeNavMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} to="/about" onClick={closeNavMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact" onClick={closeNavMenu}>Contact</Link>
            </li>
          </ul>
          {/* Dashboard right */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link dashboard-link"
                href="https://spacezone-dashboard.web.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNavMenu}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
