import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MyAccount from "../pages/MyAccountPage";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/my-account" component={MyAccount} />
    </Switch>
  );
};

export default Pages;
