import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import "./App.css";
<<<<<<< HEAD
// import ProductsList from "./components/views/ProductsList";
import Power from "./components/commons/Power/Power";
=======
>>>>>>> 96c2af5d34dba921ffffa47d0365ffe5220711c8

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Power} />
        <Route path="/panier" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
