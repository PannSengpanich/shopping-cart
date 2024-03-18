import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../sass/WelcomePage.module.scss";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Shopping Cart App!</h1>
      <div>
        <NavLink to="/signup">
          <button>Sign Up</button>
        </NavLink>
        <NavLink to="/login">
          <button>Log In</button>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomePage;
