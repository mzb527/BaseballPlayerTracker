import React from "react";
import AddPlayer from "./AddPlayer";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Team: {player.team}</p>
      <p>Position: {player.position}</p>
      <AddPlayer player={player} /> {/* ✅ Add button here */}
    </div>
  );
};

export default PlayerCard;