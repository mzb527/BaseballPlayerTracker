import React, { useEffect, useState } from "react";
import { fetchPlayerStats } from "../services/MLBApiService";

const PlayerStats = ({ playerId }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const data = await fetchPlayerStats(playerId);
        setStats(data);
      } catch (err) {
        setError("Failed to load stats.");
      } finally {
        setLoading(false);
      }
    };

    if (playerId) {
      getStats();
    }
  }, [playerId]);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!stats) return <p>No stats available for this player.</p>;

  return (
    <div>
      <h3>Stats for Player {playerId}</h3>
      <p>Games Played: {stats?.games_played ?? "N/A"}</p>
      <p>Batting Average: {stats?.avg ?? "N/A"}</p>
      <p>Home Runs: {stats?.home_runs ?? "N/A"}</p>
    </div>
  );
};

export default PlayerStats;