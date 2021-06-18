import React from 'react';
import '../stylesheets/Header.scss';

const Header = (props) => {
  return (
    <header className="containerHeader">
      <h1 className="containerHeader__title">Read heroes</h1>
      <h2 className="containerHeader__subtitle">Your comic bookshop</h2>
    </header>
  );
};

export default Header;
