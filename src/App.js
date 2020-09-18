import React from "react";
import { Route, Link } from "react-router-dom"
import Home from './Home'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <nav>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link><br></br>
        <Link>Help</Link>
      </div>
      </nav>
      <Route exact path = "/">
      <Home/>
      </Route>
    </div>
  );
};
export default App;
