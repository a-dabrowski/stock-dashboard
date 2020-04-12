import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'routes';
import Navigation from 'components/Navigation';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
