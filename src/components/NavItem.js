import React from 'react';
import {NavLink} from "react-router-dom";

const NavItem = props => {
  const {name, path, exact} = props;
  return (
    <li className="header-nav__item"><NavLink className='link header-nav__link' to={path} exact={exact === "1"}>{name}</NavLink></li>
  );
}

export default NavItem;