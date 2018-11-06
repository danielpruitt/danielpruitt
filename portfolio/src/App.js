import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import NoMatch from "./pages/NoMatch";
import './App.css';
import Navbar from "./components/Navbar/Navbar";;



const App = () => (
  <Router>
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
    
  </div>
</Router>





);


export default App;
