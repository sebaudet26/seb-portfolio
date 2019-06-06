import React, { Component } from 'react';
import ChatlerImg from '../../lib/img/Chatler.svg';
import GoloImg from '../../lib/img/Golo.svg';
import PaysafeImg from '../../lib/img/Paysafe.svg';
import QuickstatsImg from '../../lib/img/Quickstats.svg';
import WaltzImg from '../../lib/img/Waltz.svg';
import './Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h3>Featured Projects</h3>
        <div className="grid">
          <a href="http://chatler.io" className="grid-item">
            <img src={ChatlerImg} />
          </a>
          <a href="http://paysafe.com" className="grid-item">
            <img src={PaysafeImg} />
          </a>
          <a href="http://golo.io/" className="grid-item">
            <img src={GoloImg} />
          </a>
          <a href="http://slow-eye.herokuapp.com/" className="grid-item">
            <img src={QuickstatsImg} />
          </a>
          <a href="http://realestate.waltzapp.com/" className="grid-item">
            <img src={WaltzImg} />
          </a>
        </div>
      </div>
    );
  }
}

export default (Portfolio);
