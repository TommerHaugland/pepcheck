import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar flex shadow-xl">
      <Link to="/" className="nav-logo">
        T
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            PEP Sjekk
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/readme" className="nav-link" onClick={closeMenu}>
            README
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
