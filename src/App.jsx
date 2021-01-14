import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/views/Product";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import Home from "./components/views/Home/Home";
import Cart from "./components/views/Cart/Cart";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/panier" component={Cart} />
      </Switch>
      <Footer />
      <ScrollUpButton
        style={{
          backgroundColor: "none",
          width: "40px",
          height: "40px",
          transform: "translateY(-1.75rem) translateX(1.5rem)",
          borderRadius: "5px",
          boxShadow: "#FF0000 3px 3px 5px",
        }}
      />
    </Router>
  );
}

export default App;
