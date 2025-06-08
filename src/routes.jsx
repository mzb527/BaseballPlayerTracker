import HomePage from "./pages/HomePage";
import Watchlist from "./components/Watchlist"; // ✅ Correct path
import LoginPage from "./pages/LoginPage";
import AddPlayer from "./components/AddPlayer"; // ✅ Fixed the import name

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/watchlist", element: <Watchlist /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/add-player", element: <AddPlayer /> }, // ✅ Updated path
];