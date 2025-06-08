import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { WatchlistProvider } from "./context/WatchlistContext"; // ✅ Ensure correct path

const root = createRoot(document.getElementById("root")); // ✅ Use React 18 `createRoot`
root.render(
  <React.StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </React.StrictMode>
);