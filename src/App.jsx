import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header";
import "./App.css";
import ProductsList from "./components/views/ProductsList";
// import Power from "./components/commons/Power/Power";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/panier" />
      </Switch>
    </Router>
  );
}

export default App;
