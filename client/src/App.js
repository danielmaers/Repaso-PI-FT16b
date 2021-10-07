import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Home from './components/Home';
import LandingPage from './components/LandingPage';




function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      
    </div>
  );
}

export default App;
