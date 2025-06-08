import React, { useState } from "react";
import MLBApiService from "../services/MLBApiService";
import PlayerCard from "./PlayerCard";

const AddPlayer = () => {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  const handleSearch = async () => {
    console.log("Button clicked, triggering search");

    if (query.trim() === "") {
      console.log("Search blocked: Empty query");
      return;
    }

    try {
      console.log("Searching for:", query);
      const results = await MLBApiService.searchPlayers(query);

      console.log("Raw API response:", results);
      if (!Array.isArray(results)) {
        console.error("Expected an array but got:", results);
        return;
      }

      if (results.length > 0) {
        console.log("Sample player object:", JSON.stringify(results[0], null, 2));
      } else {
        console.log("No players found.");
      }

      setPlayers(results);
    } catch (error) {
      console.error("Search error:", error);
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
          players.map((player, index) => {
            console.log(`🚀 Rendering PlayerCard for player ${index + 1}:`, player);
            return (
              <React.Fragment key={player.id}>
                <p>Player Rendering: {player.fullName}</p> {/* ✅ Debug text to confirm rendering */}
                <PlayerCard player={player} />
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AddPlayer;