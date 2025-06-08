import HomePage from "./pages/HomePage";
import Watchlist from "./components/Watchlist";
import LoginPage from "./pages/LoginPage";
import AddPlayer from "./components/AddPlayer"; // ✅ Corrected import path

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/watchlist", element: <Watchlist /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/add-player", element: <AddPlayer /> }, // ✅ Matches correct file name
];