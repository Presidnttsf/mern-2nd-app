import React from "react";
import "./Navbar.css";

const Navbar = ({dark, searchTerm, setSearchTerm, toggleDarkMode }) => {
  

  

  return (
    <nav className="nav">
      <div className="left-nav">
        <span>Flipkart</span>
      </div>

      {/* Search input updates searchTerm */}
      <input
        className="nav-search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="right-nav">
        <span>Home</span>
        <span>About</span>
        <span>Contact Us</span>
      {/* Dark Mode Toggle Button */}
      <span className="darkBtn" onClick={toggleDarkMode}>
        {dark ? "Light Mode ☀" : "Dark Mode 🌙"}
      </span>
      </div>
    </nav>
  );
};

export default Navbar;
