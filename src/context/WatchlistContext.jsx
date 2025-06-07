import React, { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addPlayer = (player) => {
    if (!watchlist.find((p) => p.id === player.id)) {
      setWatchlist([...watchlist, player]);
    }
  };

  const removePlayer = (playerId) => {
    setWatchlist(watchlist.filter((p) => p.id !== playerId));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addPlayer, removePlayer }}>
      {children}
    </WatchlistContext.Provider>
  );
};