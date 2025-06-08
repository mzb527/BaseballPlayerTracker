import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { appRoutes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { WatchlistProvider } from "./context/WatchlistContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; // Corrected import

const App = () => {
  return (
    <AuthProvider>
      <WatchlistProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            {appRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
          <Footer />
        </ThemeProvider>
      </WatchlistProvider>
    </AuthProvider>
  );
};

export default App;