import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="100841111499-1b1pkss2vhmkst94divjetaln4ij0vos.apps.googleusercontent.com">
        <MantineProvider>
          <App></App>
          <ReactQueryDevtools />
        </MantineProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
