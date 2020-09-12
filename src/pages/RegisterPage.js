import React, {Component} from 'react';

import CapabilitiesList from "../components/CapabilitiesList";

import '../styles/RegisterPage.scss';

const Error = () => {
  return (
    <div>Error</div>
  );
}

class RegisterPage extends Component {
  state = {
    user_name: '',
    user_email: '',
    user_password: '',
    user_acceptance: false,
    error: false,
    capabilities: [],
  }

  API = 'http://localhost/php_rest_todoapp/api/capabilities/read.php';

  messages = {
    acceptance: 'Musisz wyrazić zgodę na przetwarzanie danych!',
    name: 'Musisz wpisać login, który ma więcej niż 3 litery!',
    email: 'Musisz wpisać prawidłowy adres e-mail!',
    password: 'Musisz wpisać hasło, które ma więcej niż 8 liter!'
  }

  componentDidMount() {
    const properties = {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    }

    fetch(this.API, properties)
      .then(response => response.json())
      .then(response => {
        if (response.status === 200 && response.success === 1) {
          this.setState({
            capabilities: response.body
          });
        }
      })
      .catch(err => console.error(err))
  }


  handleChange = e => {
    const type = e.target.type;

    switch (type) {
      case 'text':
        this.setState({
          user_name: e.target.value,
          error: false
        });
        break;
      case 'email':
        this.setState({
          user_email: e.target.value,
          error: false
        });
        break;
      case 'password':
        this.setState({
          user_password: e.target.value,
          error: false
        });
        break;
      case 'checkbox':
        this.setState({
          user_acceptance : e.target.checked,
          error: false
        });
        break;
    }
  }

  handleSubmit = e => {
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

    if (userEmail.length === 0 || userEmail.includes('@')) {
      messages.push(this.messages.email);
    }

    if (userPassword.length < 8) {
      messages.push(this.messages.password);
    }

    if (messages.length > 0) {
      this.setState({error: true});
      return;
    }

  }

  render() {
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
                  <input
                    className='register-input'
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.user_name}
                  />
                </label>
                <label className="register-label">
                  E-mail:
                  <input
                    className='register-input'
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.user_email}
                  />
                </label>
                <label className="register-label">
                  Hasło:
                  <input
                    className='register-input'
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.user_password}
                  />
                </label>
                <label className="register-label register-label__checkbox">
                  <input
                    className='register-input register-input__checkbox'
                    type="checkbox"
                    onChange={this.handleChange}
                    value={this.state.user_acceptance}
                  />
                  Wyrażam zgodę na przetważanie danych.
                </label>
                <button className='register-submit'>Zarejestruj się</button>
              </form>
              {this.state.error && <Error />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;