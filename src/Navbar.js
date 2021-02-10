import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends Component {
  handleLogout = () => {
    localStorage.clear("token");
    const { logout } = this.props;
    logout();
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="navbar">
        {!isLoggedIn && (
          <p>Welcome to dashboard Please click Login to continue</p>
        )}
        {isLoggedIn ? (
          <h3 onClick={this.handleLogout}>Logout</h3>
        ) : (
          <Link to="/login">
            <h3>Login</h3>
          </Link>
        )}{" "}
      </div>
    );
  }
}

export default Navbar;
