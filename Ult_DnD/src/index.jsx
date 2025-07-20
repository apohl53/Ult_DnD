import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App inside HashRouter
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
