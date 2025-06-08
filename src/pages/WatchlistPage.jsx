import React from "react";
import WatchlistManager from "../components/WatchlistManager";
import SearchPlayer from "../components/SearchPlayer";
<SearchPlayer />  // Ensure SearchPlayer is imported correctly if used in the page
import { SearchPlayer } from "../components/SearchPlayer"; // Adjust the import based on your file structure
const WatchlistPage = () => {
  return (
    <div>
      <h1>Your Baseball Watchlist</h1>
      <WatchlistManager />
    </div>
  );
};

export default WatchlistPage;