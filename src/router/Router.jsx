import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import ShoppingPage from "../Pages/ShoppingPage";
import CartPage from "../Pages/CartPage";
import NavigationBar from "../Components/NavigationBar";
import styles from "../sass/Router.module.scss";
export default function AppRouter({ addProductToCart }) {
  return (
    <Router>
      <NavigationBar />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shopping"
            element={<ShoppingPage addProductToCart={addProductToCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
