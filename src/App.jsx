import { useState, useEffect } from "react";
import AppRouter from "./router/Router.jsx";
import styles from "./App.module.scss";

// localStorage is similar to sessionStorage, except that while localStorage data has no expiration time,
// sessionStorage data gets cleared when the page session ends — that is, when the page is closed.

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const storedProducts = sessionStorage.getItem("selectedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    sessionStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProducts)
    );
    console.log(selectedProducts);
  }, [selectedProducts]);

  const addProductToCartHandler = (product) => {
    const existingProductIndex = selectedProducts.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists, update its amount
      const updatedProducts = [...selectedProducts];
      updatedProducts[existingProductIndex].amount += product.amount;
      setSelectedProducts(updatedProducts);
    } else {
      // Product doesn't exist, add it to the cart
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProductFromCart = (product) => {};

  return (
    <div className={styles.container}>
      <AppRouter
        addProductToCart={addProductToCartHandler}
        selectedProducts={selectedProducts}
      />
    </div>
  );
}
