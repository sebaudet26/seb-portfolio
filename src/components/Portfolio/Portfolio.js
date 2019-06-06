import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
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
        <ReactTooltip />
        <h2>Featured Projects</h2>
        <div className="portfolio-grid">
          <a data-tip="In-Seat Delivery Messenger Chatbot" target="_blank" rel="noopener noreferrer" href="http://m.me/621034761581515" className="portfolio-grid-item">
            <img alt="" src={ChatlerBotImg} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://chatler.io" className="portfolio-grid-item">
            <img alt="" src={ChatlerImg} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://paysafe.com" className="portfolio-grid-item">
            <img alt="" src={PaysafeImg} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://golo.io/" className="portfolio-grid-item">
            <img alt="" src={GoloImg} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://sealstats.com/" className="portfolio-grid-item">
            <img alt="" src={SealStatsImg} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://realestate.waltzapp.com/" className="portfolio-grid-item">
            <img alt="" src={WaltzImg} />
          </a>
        </div>
      </div>
    );
  }
}

export default (Portfolio);
