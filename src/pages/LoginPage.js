import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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

  API = "http://localhost/php_rest_todoapp/api/user/login.php";

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

  login(callback, data) {
    if (data) {
      const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      };

      fetch(this.API, params)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success === 1) {
            callback(responseJson.token);
          }
        })
        .catch((err) => console.error(err));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validation()) {
      const data = {
        login: this.state.username,
        password: this.state.password,
      };

      this.login((token) => {
        sessionStorage.setItem("userData", token);
        this.setState({
          username: "",
          password: "",
          redirect: true,
          error: false,
          errors: [],
        });
      }, data);
    } else {
      this.setState({
        error: true,
        errors: this.errorMessages,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      alert("Logowanie przebiegło pomyślnie!");
      return <Redirect to="/my-account" />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to="/" />;
    }

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
