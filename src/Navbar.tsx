import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Flaskr</Link>
      </h1>
      <ul>
        <li>
          <Link to="register">Register</Link>
        </li>
        <li>
          <Link to="login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}
