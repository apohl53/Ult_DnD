import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/app/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App inside HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
