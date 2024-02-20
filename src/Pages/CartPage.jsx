import { useContext } from "react";
import { DataContext } from "../App";
import styles from "../sass/CartPage.module.scss";
import { Modal, Button, ActionIcon } from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function CartPage() {
  const { selectedProducts, setSelectedProducts, setPageActive } =
    useContext(DataContext);

  function incAmount(id) {
    const updatedProducts = selectedProducts.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setSelectedProducts(updatedProducts);
  }

  function decAmount(id) {
    const updatedProducts = selectedProducts.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    const filteredProducts = updatedProducts.filter((item) => item.amount > 0);
    setSelectedProducts(filteredProducts);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleHeader}>Title</div>
        <div className={styles.priceHeader}>Price</div>
        <div className={styles.amountHeader}>Amount</div>
        <div className={styles.totalHeader}>Total</div>
      </div>
      {selectedProducts.length === 0 ? (
        <div className={styles.emptyCart}>
          <NavLink to="/shopping">
            <Button
              variant="white"
              color="blue"
              fullWidth
              onClick={() => setPageActive(1)}
            >
              Your cart is Empty. Go to shopping
            </Button>
          </NavLink>
        </div>
      ) : (
        selectedProducts.map((item) => {
          return (
            <div className={styles.product} key={item.id}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price}>{item.price}</div>
              <div className={styles.amountContainer}>
                <Button
                  variant="white"
                  color="blue"
                  className={styles.button}
                  onClick={() => decAmount(item.id)}
                >
                  -
                </Button>
                <div className={styles.amount}>{item.amount}</div>
                <Button
                  variant="white"
                  color="blue"
                  className={styles.button}
                  onClick={() => incAmount(item.id)}
                >
                  +
                </Button>
              </div>
              <div className={styles.total}>
                {(item.amount * item.price).toFixed(2)}$
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
