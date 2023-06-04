import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { OptionsProvider, useOptions } from "./OptionContext";

vi.mock("./initialContextValues", () => {
  return {
    initialState: {
      playerHand: 0,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 2,
        computer: 1,
      },
      results: {
        winner: "Player",
        message: "",
      },
    },
  };
});

const TestingComponent = () => {
  const { state } = useOptions();
  return (
    <>
      <p>Player: {state.score.player}</p>
      <p>Computer: {state.score.computer}</p>
      <p>Winner: {state.results.winner}</p>
    </>
  );
};

describe("OptionContext", () => {
  it("should render the component with context initial values", () => {
    render(
      <OptionsProvider>
        <TestingComponent />
      </OptionsProvider>
    );

    expect(screen.getByText(/Player: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Computer: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Winner: Player/i)).toBeInTheDocument();
  });
});
