import React, { useEffect, useState } from "react";
import { fetchPlayerStats } from "../services/MLBApiService";

const PlayerStats = ({ playerId }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      const data = await fetchPlayerStats(playerId);
      setStats(data);
    };
    getStats();
  }, [playerId]);

  if (!stats) return <p>Loading stats...</p>;

  return (
    <div>
      <h3>Stats for Player {playerId}</h3>
      <p>Games Played: {stats?.games_played || "N/A"}</p>
      <p>Batting Average: {stats?.avg || "N/A"}</p>
      <p>Home Runs: {stats?.home_runs || "N/A"}</p>
    </div>
  );
};

export default PlayerStats;