import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/App.scss';

import Header from "./Header";
import Pages from "../components/Pages";

class App extends Component {
  state = {
    menuItems: []
  }

  API = 'http://localhost/php_rest_todoapp/api/nav/read.php';

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
            menuItems: response.body
          });
        }
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Router>
        <div className="row main">
          <Header items={this.state.menuItems} />
          <Pages items={this.state.menuItems}/>
        </div>
      </Router>
    );
  }
}

export default App;
