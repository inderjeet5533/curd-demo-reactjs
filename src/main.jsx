import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>   // commented StrictMode  just because it is calling apis 2 times
  <App />
  // </React.StrictMode>
);
