import React from 'react';

const NavBar = (props) => (
  <div className='navbar'>
    <ul className='navbar-nav'>{props.children}</ul>
  </div>
);

export default NavBar;
