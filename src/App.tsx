import React from 'react';
import logo from './logo.svg';
import HeatGraph from 'components/HeatGraph'
import Navigation from 'components/Navigation'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>
          Product for making informed and concious decisions on your investments
        </h1>
        <HeatGraph />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
