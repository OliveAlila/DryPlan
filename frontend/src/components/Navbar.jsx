import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>🌦️ DryPlan</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/details">Event Details</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
