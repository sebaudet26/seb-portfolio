import React, { Component } from 'react';
import ChatlerBotImg from '../../lib/img/Chatler_Bot.svg';
import ChatlerImg from '../../lib/img/Chatler.svg';
import GoloImg from '../../lib/img/Golo.svg';
import PaysafeImg from '../../lib/img/Paysafe.svg';
import SealStatsImg from '../../lib/img/SealStats.svg';
import WaltzImg from '../../lib/img/Waltz.svg';
import './Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Featured Projects</h2>
        <div className="portfolio-grid">
          <a target="_blank" href="http://m.me/621034761581515" className="portfolio-grid-item">
            <img src={ChatlerBotImg} />
          </a>
          <a target="_blank" href="http://chatler.io" className="portfolio-grid-item">
            <img src={ChatlerImg} />
          </a>
          <a target="_blank" href="http://paysafe.com" className="portfolio-grid-item">
            <img src={PaysafeImg} />
          </a>
          <a target="_blank" href="http://golo.io/" className="portfolio-grid-item">
            <img src={GoloImg} />
          </a>
          <a target="_blank" href="http://sealstats.com/" className="portfolio-grid-item">
            <img src={SealStatsImg} />
          </a>
          <a target="_blank" href="http://realestate.waltzapp.com/" className="portfolio-grid-item">
            <img src={WaltzImg} />
          </a>
        </div>
      </div>
    );
  }
}

export default (Portfolio);
