import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = (props) => {
  return (
    <footer className="containerFooter">
      <div className="containerFooter__icons">
        <a className="containerFooter__icons--link" href="https://twitter.com/LauraPo02860847" target="_blank">
          <i className="fa fa-twitter" alt="twitter icon"></i>
        </a>
        <a
          className="containerFooter__icons--link"
          href="https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/"
          target="_blank"
        >
          <i className="fa fa-linkedin" alt="linkedin icon"></i>
        </a>

        <a className="containerFooter__icons--link" href="https://github.com/lauraportillo" target="_blank">
          <i className="fa fa-github-alt" alt="github icon"></i>
        </a>

        <a className="containerFooter__icons--link" href="mailto:lauraportillo.ark@gmail.com" target="_blank">
          <i className="fa fa-envelope" alt="envelope icon"></i>
        </a>
      </div>
      <div className="containerFooter__copy">
        <small>By Laura Portillo Rodríguez</small>
        <small>©2021</small>
      </div>
    </footer>
  );
};

export default Footer;
