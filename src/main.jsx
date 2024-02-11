import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./index.module.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import Router from "./router/Router.jsx";
import NavigationBar from "./Components/NavigationBar.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <div className={styles.container}>
          <NavigationBar></NavigationBar>
          <Router />
        </div>
        <ReactQueryDevtools></ReactQueryDevtools>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
