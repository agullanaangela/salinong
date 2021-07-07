import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import foodMenu from './components/foodMenu';

function App() {
  return (
      <div>
        <Router>
          <Route path="/" exact component={foodMenu} />
        </Router>
      </div>
  );
}

export default App;
