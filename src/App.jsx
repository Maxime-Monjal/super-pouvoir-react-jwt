import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header";
import "./App.css";
import Power from "./components/commons/Power/Power";
import Cart from "./components/views/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Power} />
        <Route path="/panier" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
