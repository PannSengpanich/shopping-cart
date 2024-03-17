import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "../Pages/WelcomePage";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import ShoppingPage from "../Pages/ShoppingPage";
import CartPage from "../Pages/CartPage";
import NavigationBar from "../Components/NavigationBar";
import styles from "../sass/Router.module.scss";
import SignUpPage from "../Pages/SignUpPage";
import LogInPage from "../Pages/LogInPage";
// import LogInPage from "../Pages/LogInPage";

export default function AppRouter({ addProductToCart, currentPath }) {
  const isExcludedRoute = ["/", "/signup", "/login", "*"].includes(currentPath);

  return (
    <Router>
      {!isExcludedRoute && <NavigationBar />}
      <div className={isExcludedRoute ? styles.content1 : styles.content2}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/shopping"
            element={<ShoppingPage addProductToCart={addProductToCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/error/*" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
