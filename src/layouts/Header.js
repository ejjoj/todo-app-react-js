import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/Header.scss';

import NavList from "../components/NavList";

const Header = (props) => {
  const {items} = props;
    return (
      <header className="col-md-12 header">
        <div className="col-md-3 header-logo">
          <Link className='link header-logo__link' to='/'>To-Do-App</Link>
        </div>
        <nav className="col-md-9 header-nav">
          <NavList items={items}/>
        </nav>
      </header>
    );
}

export default Header;
