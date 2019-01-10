import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';
import ChatlerImg from './lib/img/Chatler.svg';
import GoloImg from './lib/img/Golo.svg';
import PaysafeImg from './lib/img/Paysafe.svg';
import QuickstatsImg from './lib/img/Quickstats.svg';
import WaltzImg from './lib/img/Waltz.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="container">
          <div className="app-content">
            <h3>Featured Projects</h3>
            <div className="grid">
              <div className="grid-item">
                <img src={ChatlerImg} />
              </div>
              <div className="grid-item">
                <img src={PaysafeImg} />
              </div>
              <div className="grid-item">
                <img src={GoloImg} />
              </div>
              <div className="grid-item">
                <img src={QuickstatsImg} />
              </div>
              <div className="grid-item">
                <img src={WaltzImg} />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
