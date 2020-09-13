import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import CapabilitiesList from "../components/CapabilitiesList";

import "../styles/RegisterPage.scss";

const Error = (props) => {
  const { errors } = props;
  let keyCounter = 1;
  const errorList = errors.map((error) => (
    <li key={keyCounter++} className="register-error__message">
      {error}
    </li>
  ));
  return <ul className="register-error">{errorList}</ul>;
};

class RegisterPage extends Component {
  state = {
    user_name: "",
    user_email: "",
    user_password: "",
    user_acceptance: false,
    error: false,
    errors: [],
    capabilities: [],
    redirect: false,
  };

  API = "http://localhost/php_rest_todoapp/api/capabilities/read.php";

  messages = {
    acceptance: "Musisz wyrazić zgodę na przetwarzanie danych!",
    name: "Musisz wpisać login, który ma więcej niż 3 litery!",
    email: "Musisz wpisać prawidłowy adres e-mail!",
    password: "Musisz wpisać hasło, które ma więcej niż 8 liter!",
  };

  componentDidMount() {
    const properties = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    fetch(this.API, properties)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200 && response.success === 1) {
          this.setState({
            capabilities: response.body,
          });
        }
      })
      .catch((err) => console.error(err));
  }

  registerAPI = "http://localhost/php_rest_todoapp/api/user/register.php";

  register(callback, data) {
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
      fetch(this.registerAPI, params)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status === 201 && responseJson.success === 1) {
            callback();
          }
        })
        .catch((err) => console.error(err));
    }
  }

  handleChange = (e) => {
    const type = e.target.type;

    switch (type) {
      case "text":
        this.setState({
          user_name: e.target.value,
          error: false,
        });
        break;
      case "email":
        this.setState({
          user_email: e.target.value,
          error: false,
        });
        break;
      case "password":
        this.setState({
          user_password: e.target.value,
          error: false,
        });
        break;
      case "checkbox":
        this.setState({
          user_acceptance: e.target.checked,
          error: false,
        });
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = this.state.user_name;
    const userEmail = this.state.user_email;
    const userPassword = this.state.user_password;
    const userAcceptance = this.state.user_acceptance;

    let messages = [];

    if (!userAcceptance) {
      messages.push(this.messages.acceptance);
    }

    if (userName.length < 3) {
      messages.push(this.messages.name);
    }

    if (userEmail.length === 0 || !userEmail.includes("@")) {
      messages.push(this.messages.email);
    }

    if (userPassword.length < 8) {
      messages.push(this.messages.password);
    }

    if (messages.length > 0) {
      this.setState({
        error: true,
        errors: messages,
      });
      return;
    } else {
      let date = new Date().toISOString();
      let hours = new Date().toISOString();
      hours = hours.slice(11, 19);
      date = date.slice(0, 10);

      const data = {
        name: this.state.user_name,
        email: this.state.user_email,
        password: this.state.user_password,
        joined_at: `${date} ${hours}`,
      };
      this.register(() => {
        this.setState({
          user_name: "",
          user_email: "",
          user_password: "",
          user_acceptance: false,
          error: false,
          errors: [],
          redirect: true,
        });
      }, data);
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to="/" />;
    }

    return (
      <div className="row register">
        <div className="col-12 register-capabilities">
          <div className="col-12">
            <h2 className="register-capabilities__title">Rejestracja</h2>
          </div>
          <div className="col-md-12 register-capabilities__container">
            <CapabilitiesList items={this.state.capabilities} />
            <div className="col-md-6 register-form__wrapper">
              <form className="register-form" onSubmit={this.handleSubmit}>
                <label className="register-label">
                  Login:
                  <i className="fas fa-user register-label__icon"></i>
                  <input
                    className="register-input"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.user_name}
                  />
                </label>
                <label className="register-label">
                  E-mail:
                  <i className="fas fa-envelope register-label__icon"></i>
                  <input
                    className="register-input"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.user_email}
                  />
                </label>
                <label className="register-label">
                  Hasło:
                  <i className="fas fa-lock register-label__icon"></i>
                  <input
                    className="register-input"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.user_password}
                  />
                </label>
                <label className="register-label register-label__checkbox">
                  <input
                    className="register-input register-input__checkbox"
                    type="checkbox"
                    onChange={this.handleChange}
                    value={this.state.user_acceptance}
                  />
                  Wyrażam zgodę na przetważanie danych.
                </label>
                <button className="register-submit">Zarejestruj się</button>
              </form>
              {this.state.error && <Error errors={this.state.errors} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
