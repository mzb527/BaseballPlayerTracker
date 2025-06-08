import React, { createContext, useState, useEffect, useCallback } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addPlayer = useCallback((player) => {
    console.log("Adding player:", player);
    setWatchlist((prev) => {
      if (!prev.some((p) => p.id === player.id)) {
        const updatedWatchlist = [...prev, player];
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      }
      return prev;
    });
  }, [watchlist]); // ✅ Ensure state updates dynamically

  const removePlayer = useCallback((playerId) => {
    setWatchlist((prev) => {
      const updatedWatchlist = prev.filter((p) => p.id !== playerId);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  }, [watchlist]); // ✅ Ensure state updates dynamically

  return (
    <WatchlistContext.Provider value={{ watchlist, addPlayer, removePlayer }}>
      {children}
    </WatchlistContext.Provider>
  );
};