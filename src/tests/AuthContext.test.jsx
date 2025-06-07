import { render, screen } from "@testing-library/react";
import { AuthProvider, AuthContext } from "../context/AuthContext";

test("Initially no user is logged in", () => {
  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {(value) => <span>{value.user ? "Logged In" : "Logged Out"}</span>}
      </AuthContext.Consumer>
    </AuthProvider>
  );

  expect(screen.getByText("Logged Out")).toBeInTheDocument();
});