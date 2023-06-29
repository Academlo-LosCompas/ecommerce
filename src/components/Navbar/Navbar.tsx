import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/about">
            Acerca de
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
