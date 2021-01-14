import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header";
import Product from "./components/views/Product";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/panier" />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
