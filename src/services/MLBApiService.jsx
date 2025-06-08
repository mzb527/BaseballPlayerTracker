import axios from "axios";

const BASE_URL = "https://statsapi.mlb.com/api/v1"; // ✅ Official MLB Stats API

const MLBApiService = {
  getPlayerStats: async (playerId) => {
    try {
      const response = await axios.get(`${BASE_URL}/people/${playerId}/stats`);
      console.log("Fetched player stats:", response.data); // ✅ Debugging log
      return response.data;
    } catch (error) {
      console.error("Error fetching player stats:", error);
      return null;
    }
  },

  searchPlayers: async (query) => {
    try {
      const requestUrl = `${BASE_URL}/people/search?name=${query}`;
      console.log("Fetching from:", requestUrl); // ✅ Debugging log

      const response = await axios.get(requestUrl);
      console.log("API Response Data:", response.data); // ✅ Debugging log

      if (!response.data || !response.data.people) {
        console.error("Expected player list in response but got:", response.data);
        return [];
      }

      return response.data.people; // ✅ Correctly extract player list array
    } catch (error) {
      console.error("Error searching for players:", error);
      return [];
    }
  },

  getTeamRoster: async (teamId) => {
    try {
      const response = await axios.get(`${BASE_URL}/teams/${teamId}/roster`);
      console.log("Fetched team roster:", response.data); // ✅ Debugging log
      return response.data;
    } catch (error) {
      console.error("Error fetching team roster:", error);
      return null;
    }
  },
};

export default MLBApiService;