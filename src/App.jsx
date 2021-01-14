import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./components/views/Users";
import Login from "./components/views/Login";
import Logout from "./components/views/Logout";
import Power from "./components/commons/Power/Power";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <Link to="/" className="navbar-brand">
              My Web App
            </Link>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Disconnect
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </Switch>
          <Power />
        </div>
      </div>
    </Router>
  );
}

export default App;
