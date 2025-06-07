import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
import "../styles/Navbar.css";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/watchlist" className="nav-link">Watchlist</Link>
      {user ? (
        <div className="nav-user">
          <span>Welcome, {user.username}!</span>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="nav-link">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;