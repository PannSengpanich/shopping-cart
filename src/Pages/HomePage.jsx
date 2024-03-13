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
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>HOMEPAGE</div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential
          );
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
}

export default HomePage;
