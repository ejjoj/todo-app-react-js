import React from 'react';
import NavItem from "./NavItem";

const NavList = props => {
  const {items} = props;
  const menu = items.map(item => <NavItem key={item.id} name={item.name} path={item.path} exact={item.exact}/>);

  return (
    <ul className="header-nav__container">
      {menu}
    </ul>
  );
}

export default NavList;