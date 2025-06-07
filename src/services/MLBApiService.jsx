import axios from "axios";

const BASE_URL = "http://lookup-service-prod.mlb.com/json/named.";

export const fetchPlayerInfo = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_URL}player_info.bam`, {
      params: { player_id: playerId }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching player info:", error);
    return null;
  }
};

export const fetchPlayerStats = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_URL}player_stats.bam`, {
      params: { player_id: playerId, season: 2024 }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null;
  }
};