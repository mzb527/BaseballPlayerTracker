import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { appRoutes } from "../routes";

test("Renders HomePage correctly", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      {appRoutes.map(({ path, element }) => path === "/" && element)}
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome to Baseball Player Tracker")).toBeInTheDocument();
});