import React, { Component } from 'react';
import './Header.scss';
import Logo from '../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-content">
            <img src={Logo} />
            <div className="header-seb">
              <div className="header-seb-name">Sébastien Audet</div>
              <div className="header-seb-role">UX/UI Designer and Frontend Developer</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Header);
