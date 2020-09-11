import React from 'react';
import {Switch} from 'react-router-dom';

import PageItem from "./PageItem";

const Pages = props => {
  const {items} = props;
  const pages = items.map(item => <PageItem key={item.id} name={item.component} path={item.path} exact={item.exact} />);
  return (
    <Switch>
      {pages}
    </Switch>
  );
}

export default Pages;