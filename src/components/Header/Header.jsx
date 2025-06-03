import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p className="header__logo-text">Aswini Viswanath</p>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
