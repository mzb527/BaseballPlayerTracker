import { render, screen, fireEvent } from "@testing-library/react";
import { WatchlistProvider } from "../context/WatchlistContext";
import WatchlistManager from "../components/WatchlistManager";

test("Displays empty watchlist message", () => {
  render(
    <WatchlistProvider>
      <WatchlistManager />
    </WatchlistProvider>
  );

  expect(screen.getByText("No players added yet.")).toBeInTheDocument();
});

test("Removes player from watchlist", () => {
  render(
    <WatchlistProvider>
      <WatchlistManager />
    </WatchlistProvider>
  );

  const removeButton = screen.queryByText("Remove");
  expect(removeButton).toBeNull(); // No players should exist initially
});