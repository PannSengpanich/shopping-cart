// ProductModal.js

import React from "react";
import { Modal, Button, ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import styles from "../sass/ProductModal.module.scss";

export default function ProductModal({ info, opened, onClose }) {
  return (
    <Modal opened={opened} onClose={onClose} withCloseButton={false} centered>
      {info.description}

      <div className={styles["button-group"]}>
        <Button
          variant="white"
          color="blue"
          fullWidth
          className={styles.button}>
          -
        </Button>
        <Button
          variant="white"
          color="blue"
          fullWidth
          className={styles.button}>
          +
        </Button>
        <ActionIcon
          variant="filled"
          aria-label="Settings"
          className={styles.button}>
          <IconAdjustments stroke={1.5} />
        </ActionIcon>
      </div>
    </Modal>
  );
}
