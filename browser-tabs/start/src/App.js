import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Tabs from './components/Tabs'
import Routes from './Routes'
import './App.css';

function App() {
  return (
    < Router >
      <div className="app">
      <div className="browser">
        <Tabs></Tabs>

        <div className="viewport">
         <Routes></Routes>
        </div>
      </div>
    </div>
 </Router>
   
  );
}

export default App;
