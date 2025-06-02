import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { injectGlobalStyles } from "@assets/styles/main";

injectGlobalStyles();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
