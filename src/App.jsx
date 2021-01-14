import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/views/Product";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import Power from "./components/commons/Power/Power";
import Cart from "./components/views/Cart/Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Power} />
        <Route path="/product" component={Product} />
        <Route path="/panier" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
