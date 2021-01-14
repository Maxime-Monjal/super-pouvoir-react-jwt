import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/panier" />
      </Switch>
    </Router>
  );
}

export default App;
