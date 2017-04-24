import React from 'react';
import { NavLink } from 'react-router-dom';

const isActiveFunc = (match, location) => {
  console.log(match)
  return match
}

const Header = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to="/about">About</NavLink>
    <NavLink
      isActive={isActiveFunc}
      activeClassName="active"
      to="/contact">Contact</NavLink>
    <NavLink to="/account">Account</NavLink>
  </nav>
);

export default Header;
