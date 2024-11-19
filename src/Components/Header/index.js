import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">MYJN</h1>
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {menuOpen && (
        <nav className="menu">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
