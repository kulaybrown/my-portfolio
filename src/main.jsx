import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { preloadAllImages } from "./utils/preloadImages";

// Preload critical images asynchronously in the background as early as possible
preloadAllImages();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);