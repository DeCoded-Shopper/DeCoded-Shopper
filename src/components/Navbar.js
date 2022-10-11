import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Select from "react-select";
import "./styles/Navbar.css";

export default function Navbar() {
  const options = [
    { value: "electronics", label: "electronics" },
    { value: "jewelery", label: "jewelery" },
    { value: "men's clothing", label: "men's clothing" },
    { value: "women's clothing", label: "women's clothing" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState();

  return (
    <nav className="nav">
      <Link to="/Products" className="site-title">
        Decoded Shopper
      </Link>

      <Select
        className="select"
        classNamePrefix="Category"
        isClearable={true}
        isSearchable={true}
        colour="Black"
        name="Category"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search Product..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <ul>
        <CustomLink to="/Products">
        <img src={"Home.png"} style={{ height: '3rem', width: '3rem' }}  ></img>
        </CustomLink>
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
