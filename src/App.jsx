import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Watchlist from "./components/Watchlist";
import LoginPage from "./pages/LoginPage";
import AddPlayer from "./components/AddPlayer"; // ✅ Correctly importing AddPlayer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-player" element={<AddPlayer />} /> {/* ✅ Fixed reference */}
      </Routes>
    </Router>
  );
}

export default App;