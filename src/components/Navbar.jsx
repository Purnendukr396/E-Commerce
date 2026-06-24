
import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="box">

        <img src={assets.logo} alt="logo" className="logo" />

        <div className="links">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/collection">COLLECTION</NavLink>
          <NavLink to="/About">ABOUT</NavLink>
          <NavLink to="/Contact">CONTACT</NavLink>
        </div>

        <div className="icons">

          <img
            className="search-logo"
            src={assets.search_icon}
            alt="search"
          />

          <div className="profile">

            <img
              className="profile-logo"
              src={assets.profile_icon}
              alt="profile"
            />

            <div className="dropdown">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>

          </div>

          <img
            className="cart-logo"
            src={assets.cart_icon}
            alt="cart"
          />

          <img
            className="menu-icon"
            src={assets.menu_icon}
            alt="menu"
            onClick={() => setShowMenu(true)}
          />

        </div>

      </div>

      <div className={showMenu ? "mobile-menu active" : "mobile-menu"}>

        <p
          className="close-btn"
          onClick={() => setShowMenu(false)}
        >
          ✕
        </p>

        <NavLink to="/" onClick={() => setShowMenu(false)}>
          Home
        </NavLink>

        <NavLink to="/collection" onClick={() => setShowMenu(false)}>
          Collection
        </NavLink>

        <NavLink to="/about" onClick={() => setShowMenu(false)}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={() => setShowMenu(false)}>
          Contact
        </NavLink>

      </div>
    </>
  );
};

export default Navbar;