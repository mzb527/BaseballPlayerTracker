import React, { useContext, useState } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const WatchlistManager = () => {
  const { watchlist, removePlayer } = useContext(WatchlistContext);
  const [sortBy, setSortBy] = useState("name");

  const sortedWatchlist = [...watchlist].sort((a, b) => 
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <h2>Watchlist</h2>
      <label>Sort by:</label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="team">Team</option>
      </select>

      {watchlist.length === 0 ? (
        <p>No players added yet.</p>
      ) : (
        <ul>
          {sortedWatchlist.map((player) => (
            <li key={player.id}>
              {player.name} ({player.team}) 
              <button onClick={() => removePlayer(player.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchlistManager;