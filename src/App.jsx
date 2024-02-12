import { useState, useEffect } from "react";
import AppRouter from "./router/Router.jsx";
import styles from "./App.module.scss";

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    // Retrieve selected products from localStorage on initial render
    const storedProducts = localStorage.getItem("selectedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addProductToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProductFromCart = (product) => {};

  return (
    <div className={styles.container}>
      <AppRouter />
    </div>
  );
}
