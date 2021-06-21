import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <header className="containerHeader">
      <h1 className="containerHeader__title">Read heroes</h1>
      <h2 className="containerHeader__subtitle">Your comic bookshop</h2>
      <nav>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">|</li>
          <li className="menu__item">
            <Link to="/create">Create</Link>
          </li>
          <li className="menu__item">|</li>
          <li className="menu__item">
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
