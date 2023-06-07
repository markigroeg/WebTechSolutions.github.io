import React from 'react';
import './Navbar.css'; // You would create this file to style your navbar

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;