import React from "react";
import { Link, NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Shopping Cart App!</h1>
      <NavLink to="/signup">
        <button>Sign Up</button>
      </NavLink>
      <NavLink to="/login">
        <button>Log In</button>
      </NavLink>
    </div>
  );
};

export default WelcomePage;
