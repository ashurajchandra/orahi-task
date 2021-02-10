import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    const token = localStorage.getItem("token");
    this.state = {
      isLoggedIn: token,
    };
  }

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar logout={this.logout} isLoggedIn={this.state.isLoggedIn} />

          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => {
                return <Login {...props} login={this.login} />;
              }}
            />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
