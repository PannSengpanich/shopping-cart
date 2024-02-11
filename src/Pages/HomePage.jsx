import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/queries";
import NavigationBar from "../Components/NavigationBar";
import styles from "../sass/HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.container}>
      <div>HOMEPAGE</div>
    </div>
  );
}

export default HomePage;
