import React from 'react';
import reactLogo from './react-logo.svg';
import apolloLogo from './apollo-logo.svg';
import './App.css';

export const Header = () => (
  <div className="App">
    <header className="App-header">
      <img src={apolloLogo} className="App-logo" alt="Logo"/>
      <img src={reactLogo} className="App-logo App-react-logo" alt="logo" />
      <h1 className="App-title">Apollo React Client</h1>
    </header>
  </div>
);
