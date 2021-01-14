import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header";
import "./App.css";
import Home from "./components/views/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/panier" />
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
