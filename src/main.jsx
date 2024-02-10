import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createTheme, MantineProvider } from "@mantine/core";
import Router from "./router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Router />
        <ReactQueryDevtools></ReactQueryDevtools>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
