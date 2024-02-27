import { useState, useEffect, createContext, useContext } from "react";
import AppRouter from "./router/Router.jsx";
import styles from "./App.module.scss";

// localStorage is similar to sessionStorage, except that while localStorage data has no expiration time,
// sessionStorage data gets cleared when the page session ends — that is, when the page is closed.

export const DataContext = createContext();
export default function App() {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const storedProducts = sessionStorage.getItem("selectedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const [pageActive, setPageActive] = useState(() => {
    const storedValue = sessionStorage.getItem("pageActive");
    return storedValue ? parseInt(storedValue) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem(
      "selectedProducts",
      JSON.stringify(selectedProducts),
    );
    console.log(selectedProducts);
  }, [selectedProducts]);

  useEffect(() => {
    sessionStorage.setItem("pageActive", parseInt(pageActive));
    console.log(pageActive);
  }, [pageActive]);

  const addProductToCart = (product) => {
    const existingProductIndex = selectedProducts.findIndex(
      (p) => p.id === product.id,
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

  return (
    <DataContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        addProductToCart,
        pageActive,
        setPageActive,
      }}
    >
      <div className={styles.container}>
        <AppRouter />
      </div>
    </DataContext.Provider>
  );
}
