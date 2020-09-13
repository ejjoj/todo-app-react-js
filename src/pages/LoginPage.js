import React, { Component } from "react";

import "../styles/LoginPage.scss";

export default class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    redirect: false,
    error: false,
    errors: [],
  };

  messages = {
    username: "Nazwa użytkownika nie może być którsza niż 3 znaki.",
    password: "Hasło nie może być krótsze niż 8 znaków.",
    afterFetch:
      "Nie znaleziono użytkownika o podanej nazwie użytkownika lub haśle. Spóbuj ponownie!",
  };

  errorMessages = [];

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validation() {
    if (this.state.username.length < 3) {
      this.errorMessages.push(this.messages.username);
    }

    if (this.state.password.length < 8) {
      this.errorMessages.push(this.messages.password);
    }

    if (this.errorMessages.length > 0) return false;
    else return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validation()) {
      console.log("test");
    } else {
      this.setState({
        error: true,
        errors: this.errorMessages,
      });
    }
  };

  render() {
    return (
      <div className="row login">
        <div className="col-md-6 login-container login-container__left">
          <h2 className="login-title">Zaloguj się</h2>
          <div className="col-md-12 login-see">
            <h3 className="login-title__sub">Zobacz również:</h3>
            <ul className="login-see__container">
              <li className="login-see__item">test</li>
              <li className="login-see__item">test</li>
              <li className="login-see__item">test</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 login-container login-container__right">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label className="login-label">
              Login:
              <i className="far fa-user login-label__icon"></i>
              <input
                className="login-input"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            <label className="login-label">
              Hasło:
              <i className="fas fa-lock login-label__icon"></i>
              <input
                className="login-input"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <button className="login-submit">Zaloguj się!</button>
          </form>
        </div>
      </div>
    );
  }
}
