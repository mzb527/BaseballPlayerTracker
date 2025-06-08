import React from "react";
import "../styles/PlayerCard.css"; // ✅ Updated path to styles folder

const PlayerCard = ({ player }) => {
  console.log("🚀 Rendering PlayerCard component for:", player.fullName);

  if (!player || !player.id) {
    console.error("❌ PlayerCard: Invalid player object received:", player);
    return null;
  }

  return (
    <div className="player-card">
      <p>✅ PlayerCard Component Loaded</p>
      <h3>{player.fullName || "Unknown Player"}</h3>
      <p>Position: {player.primaryPosition?.name || "Unknown"}</p>
      <p>Jersey Number: {player.primaryNumber || "N/A"}</p>
      <p>Debut Date: {player.mlbDebutDate || "N/A"}</p>
      <p>Nickname: {player.nickName || "None"}</p>
    </div>
  );
};

export default PlayerCard;