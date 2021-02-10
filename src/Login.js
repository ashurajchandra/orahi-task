import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { showSuccessNotification, showerrorNotification } from "./Noty";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      clickedContinue: false,
      otp: "",
      isLoggedIn: false,
    };
  }

  handlePhoneChange = (e) => {
    const { phone } = this.state;
    this.setState({
      phone: e.target.value,
    });
  };
  handleOtpChange = (e) => {
    const { otp } = this.state;
    this.setState({
      otp: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { phone, clickedContinue, otp } = this.state;

    if (phone && phone.length == "10") {
      this.setState({
        clickedContinue: true,
      });
      console.log("phone is correct and taking you to next page");
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      showSuccessNotification(OTP);
      localStorage.setItem("otp", OTP);
    } else {
      return showerrorNotification("Please Enter A Valid Phone Number");
    }
  };

  handlelogin = (e) => {
    e.preventDefault();

    const { otp, isLoggedIn } = this.state;

    if (otp === localStorage.getItem("otp")) {
      const { login } = this.props;
      localStorage.setItem("token", otp);
      showSuccessNotification("Login Sucess");
      login();
    } else {
      showerrorNotification("Enter Correct OTP");
    }
  };

  render() {
    if (localStorage.getItem("token")) return <Redirect to="/home" />;
    const { phone, clickedContinue, otp, isLoggedIn } = this.state;

    return (
      <div>
        {!clickedContinue && (
          <div className="login-card">
            <h2>Login</h2>
            <p>Please enter your mobile number to proceed</p>
            <input
              onChange={this.handlePhoneChange}
              value={phone}
              type="number"
              placeholder="10-digit mobilenumber"
              input
              class="no-arrow"
            />
            <button onClick={this.handleSubmit} id="continue-btn">
              Continue
            </button>
          </div>
        )}
        {clickedContinue && (
          <div className="login-card">
            <h2>Login</h2>
            <p>Please enter your otp</p>
            <input
              onChange={this.handleOtpChange}
              type="number"
              placeholder="enter your otp here"
              class="no-arrow"
            />
            <button onClick={this.handlelogin} id="continue-btn">
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
