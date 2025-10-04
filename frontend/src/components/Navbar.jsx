// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Changed to module

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {" "}
      {/* Use module class */}
      <h1>🌦️ DryPlan</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/details">Event Details</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
