import HomePage from "./pages/HomePage";
import WatchlistPage from "./pages/WatchlistPage";
import LoginPage from "./pages/LoginPage";

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/watchlist", element: <WatchlistPage /> },
  { path: "/login", element: <LoginPage /> },
];