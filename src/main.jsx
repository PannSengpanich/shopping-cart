import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MainProvider } from "./Provider/MainProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <App></App>
    </MainProvider>
  </React.StrictMode>
);
