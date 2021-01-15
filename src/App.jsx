import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/views/Home/Home";
import Product from "./components/views/Product";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import Cart from "./components/views/Cart/Cart";
import Page404 from "./components/views/Page404/Page404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits" component={Home} />
        <Route exact path="/produits/:categorie" component={Home} />
        <Route path="/product/:power" component={Product} />
        <Route path="/panier" component={Cart} />
        <Route path="/:all" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
