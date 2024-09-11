import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {

  const cartItemsCount = useSelector((state) => state.cart.cart.length);

  console.log('Cart Items Count:', cartItemsCount); 

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img 
          src="https://www.newu.in/cdn/shop/files/New-NEWU-logo-03_f12076f9-639d-491c-8f87-a9f844a75bf3.png?v=1676612237" 
          alt="logo" 
          className="logo-img"
        />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <form className="search-form">
        <input type="text" placeholder="Search..." className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
      <Link to="/cart" className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
      </Link>
    </nav>
  );
}

export default Navbar;
