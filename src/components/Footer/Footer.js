import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            © Sébastien Audet {(new Date()).getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}

export default (Footer);
