import axios from "axios";

const BASE_URL = "http://lookup-service-prod.mlb.com/json/named.";
const cache = new Map();

export const fetchPlayerStats = async (playerId) => {
  if (cache.has(playerId)) return cache.get(playerId);

  try {
    const response = await axios.get(`${BASE_URL}player_stats.bam`, {
      params: { player_id: playerId, season: 2024 }
    });

    cache.set(playerId, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null;
  }
};