import React, { useState } from "react";
import MLBApiService from "../services/MLBApiService";
import PlayerCard from "./PlayerCard";

const SearchPlayer = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") {
      console.log("Search blocked: Empty query");
      return;
    }

    console.log("Searching for:", query); // ✅ Debugging log

    try {
      const results = await MLBApiService.searchPlayers(query);
      console.log("Search results:", results); // ✅ Debugging log
      setPlayers(results);
    } catch (error) {
      console.error("Search error:", error); // ✅ Catches errors
    }
  };

  return (
    <div>
      <h2>Search Players</h2>
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

export default SearchPlayer;