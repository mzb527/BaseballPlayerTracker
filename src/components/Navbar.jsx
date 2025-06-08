import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/watchlist" className="nav-link">Watchlist</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/add-player" className="nav-link">Add Players</Link>
    </nav>
  );
};

export default Navbar;