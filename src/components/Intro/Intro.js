import React, { Component } from 'react';
import './Intro.scss';
import LinkedInLogo from '../../lib/img/linkedin.svg';
import GitHubLogo from '../../lib/img/github.svg';

class Footer extends Component {
  render() {
    return (
      <div className="intro">
        <div className="app-content">
          <div className="intro-block">
            <h1>Getting stuff done.</h1>
            <div className="intro-btn">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sebastien-audet-a2583194/" className="intro-btn-item linkedIn">
                <img alt="LinkedIn Logo" src={LinkedInLogo} />
                View LinkedIn
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/happykennedy" className="intro-btn-item github">
                <img alt="GitHub Logo" src={GitHubLogo} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (Footer);
