import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://lookup-service-prod.mlb.com/json/named.";

const TeamRoster = ({ teamId }) => {
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    const fetchRoster = async () => {
      try {
        const response = await axios.get(`${BASE_URL}roster_40.bam`, {
          params: { team_id: teamId }
        });
        setRoster(response.data.roster_40.queryResults.row);
      } catch (error) {
        console.error("Error fetching team roster:", error);
      }
    };
    fetchRoster();
  }, [teamId]);

  return (
    <div>
      <h2>Team Roster</h2>
      <ul>
        {roster.map((player) => (
          <li key={player.player_id}>{player.name_display_first_last}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamRoster;