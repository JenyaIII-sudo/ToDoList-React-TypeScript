import React from 'react';

export const Navbar: React.FunctionComponent = () => {
 return ( 
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Todo list</a></li>
        <li><a href="/">Information</a></li>
      </ul>
    </div>
  </nav>
 );
}

export default Navbar;