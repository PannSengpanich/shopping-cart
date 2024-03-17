import { useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/queries";
import NavigationBar from "../Components/NavigationBar";
import styles from "../sass/HomePage.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>HOMEPAGE</div>
    </div>
  );
}

export default HomePage;
