import React, { useState } from "react";
import MLBApiService from "../services/MLBApiService";
import PlayerCard from "../components/PlayerCard";

const AddPlayers = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await MLBApiService.searchPlayers(query);
    console.log("Search results:", results); // ✅ Debugging log
    setPlayers(results);
  };

  return (
    <div>
      <h2>Add Players to Watchlist</h2>
      <input
        type="text"
        placeholder="Enter player name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search Players</button>

      <div className="player-results">
        {players.length === 0 ? (
          <p>No players found.</p>
        ) : (
          players.map((player) => <PlayerCard key={player.id} player={player} />)
        )}
      </div>
    </div>
  );
};

export default AddPlayers;