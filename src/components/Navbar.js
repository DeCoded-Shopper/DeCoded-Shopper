import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Select from "react-select";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Decoded Shopper
      </Link>

      <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/wishlist">WishList</CustomLink>
        <CustomLink to="/profilepage">Profile</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
