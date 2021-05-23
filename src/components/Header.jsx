import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <Link to="/">Covid 19 Tracker</Link>
      <Link to="map">Map View</Link>
    </div>
  );
}

export default Header;
