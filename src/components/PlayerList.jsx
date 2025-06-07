import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const players = [
  { id: 1, name: "Shohei Ohtani" },
  { id: 2, name: "Aaron Judge" },
  { id: 3, name: "Mookie Betts" }
];

const PlayerList = () => {
  const { addPlayer } = useContext(WatchlistContext);

  return (
    <div>
      <h2>MLB Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} <button onClick={() => addPlayer(player)}>Add to Watchlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;