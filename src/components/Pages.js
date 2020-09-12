import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/register' component={RegisterPage} />
    </Switch>
  );
}

export default Pages;