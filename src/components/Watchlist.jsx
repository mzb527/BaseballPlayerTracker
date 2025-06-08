import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const Watchlist = () => {
  const { watchlist, removePlayer } = useContext(WatchlistContext);

  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No players added yet.</p>
      ) : (
        <ul>
          {watchlist.map((player) => (
            <li key={player.id}>
              {player.name}
              <button onClick={() => removePlayer(player.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;