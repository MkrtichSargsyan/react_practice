import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" className={classes.item}>
          Profile
        </NavLink>
      </div>
      <div> 
        <NavLink to="/dialogs" className={classes.item}>
          Messages
        </NavLink>
      </div>
      <div>
        <a href="#" className={classes.item}>
          News
        </a>
      </div>
      <div>
        <a href="#" className={classes.item}>
          Music
        </a>
      </div>
      <div>
        <a href="#" className={classes.item}>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
