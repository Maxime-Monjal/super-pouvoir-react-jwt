import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/views/Product";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
