import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-title">Ransomware Detection</div>
      <div className="header-options">
        <a className="header-option" href="/">Home</a>
        <a className="header-option" href="/analysis">Analysis</a>
        <a className="header-option" href="/about">About</a>
      </div>
    </div>
  );
}

export default Header;