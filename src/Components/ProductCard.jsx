import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProductModal from "./ProductModal"; // Import the ProductModal component
import styles from "../sass/ProductCard.module.scss";

export default function ProductCard({ info }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={styles["product-card"]}>
      <Card className={styles.card}>
        <Image src={info.image} className={styles.image} alt="Norway" />

        <Group position="center" className={styles["title-container"]}>
          <Text className={styles.title}> {info.title}</Text>
        </Group>

        {/* Render ProductModal component */}
        <ProductModal info={info} opened={opened} onClose={close} />

        <Button onClick={open} variant="light">
          View Info
        </Button>
      </Card>
    </div>
  );
}
