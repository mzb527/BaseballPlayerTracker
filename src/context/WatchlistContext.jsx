import React, { createContext, useCallback, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addPlayer = useCallback((player) => {
    setWatchlist((prev) =>
      prev.some((p) => p.id === player.id) ? prev : [...prev, player]
    );
  }, []);

  const removePlayer = useCallback((playerId) => {
    setWatchlist((prev) => prev.filter((p) => p.id !== playerId));
  }, []);

  return (
    <WatchlistContext.Provider value={{ watchlist, addPlayer, removePlayer }}>
      {children}
    </WatchlistContext.Provider>
  );
};