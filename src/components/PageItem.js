import React from 'react';
import {Route} from 'react-router-dom';
import {HomePage, AboutPage, RegisterPage} from '../pages/';

const PageItem = props => {
  const {name, path, exact} = props;

  function getDisplayedName(Component) {
    return Component.displayName || Component.name || 'Component';
  }

  function compareFetchedNameToComponentName() {
    
  }

  return (
    <Route exact={exact === '1'} path={path} component={renderComponent(name)} />
  );
}

export default PageItem;