import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import { Modal, Button, ActionIcon } from "@mantine/core";
import { IconAdjustments, IconShoppingCart } from "@tabler/icons-react";
import styles from "../sass/ProductModal.module.scss";

export default function ProductModal({ info, opened, onClose }) {
  const { addProductToCart } = useContext(DataContext);
  const [productAmount, setProductAmount] = useState(0);

  const incAmount = () => {
    setProductAmount(productAmount + 1);
  };

  const decAmount = () => {
    if (productAmount > 0) setProductAmount(productAmount - 1);
  };

  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false} centered>
      <div className={styles.container}>
        <div className={styles.description}>{info.description}</div>
        <div className={styles.price}>{info.price}$</div>
        <div className={styles["button-group"]}>
          <Button
            variant="white"
            color="blue"
            fullWidth
            className={styles.button}
            onClick={decAmount}
          >
            -
          </Button>
          <div className={styles.amount}>{productAmount}</div>
          <Button
            variant="white"
            color="blue"
            fullWidth
            className={styles.button}
            onClick={incAmount}
          >
            +
          </Button>
        </div>
        <Button
          variant="filled"
          aria-label="Settings"
          className={styles.button}
          onClick={() => addProductToCart({ ...info, amount: productAmount })}
          fullWidth
        >
          Add to cart
        </Button>
      </div>
    </Modal>
  );
}
