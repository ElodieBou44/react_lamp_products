import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="my-nav">
      <ul>
        <li>
          <Link to="/">home</Link>
          {/* <a href="/">Home</a> */}
        </li>
        <li>
          <Link to="/products">our products</Link>
          {/* <a href="/products">Our Products</a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
