import axios from "axios";

const BASE_URL = "https://api.mlb.com/v1"; // ✅ Replace with the actual MLB API endpoint

const MLBApiService = {
  getPlayerStats: async (playerId) => {
    try {
      const response = await axios.get(`${BASE_URL}/players/${playerId}/stats`);
      return response.data;
    } catch (error) {
      console.error("Error fetching player stats:", error);
      return null;
    }
  },

  searchPlayers: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/players?search=${query}`);
      return response.data;
    } catch (error) {
      console.error("Error searching for players:", error);
      return [];
    }
  },

  getTeamRoster: async (teamId) => {
    try {
      const response = await axios.get(`${BASE_URL}/teams/${teamId}/roster`);
      return response.data;
    } catch (error) {
      console.error("Error fetching team roster:", error);
      return null;
    }
  },
};

export default MLBApiService;