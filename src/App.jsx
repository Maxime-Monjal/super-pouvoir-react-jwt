import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <Helmet>
        <title>Magic Pills</title>
        <meta
          name="description"
          content="This is a site to become a super hero for a brief moment"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/{idUrl}" component={Home} />
        <Route path="/produit" component={Product} />
        <Route path="/panier" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
