// ProductModal.js

import React, { useState } from "react";
import { Modal, Button, ActionIcon } from "@mantine/core";
import { IconAdjustments, IconShoppingCart } from "@tabler/icons-react";
import styles from "../sass/ProductModal.module.scss";

export default function ProductModal({ info, opened, onClose }) {
  const [amount, setAmount] = useState(0);
  const incAmount = () => {
    setAmount(amount + 1);
  };
  const decAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false} centered>
      <div className={styles.description}>{info.description}</div>

      <div className={styles["button-group"]}>
        <Button
          variant="white"
          color="blue"
          fullWidth
          className={styles.button}
          onClick={decAmount}>
          -
        </Button>
        <div className={styles.amount}>{amount}</div>
        <Button
          variant="white"
          color="blue"
          fullWidth
          className={styles.button}
          onClick={incAmount}>
          +
        </Button>
        <ActionIcon
          variant="filled"
          aria-label="Settings"
          className={styles.button}>
          <IconShoppingCart stroke={1.5} />
        </ActionIcon>
      </div>
    </Modal>
  );
}
