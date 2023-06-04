import { render, screen } from "@testing-library/react";
import { useEffect, useReducer } from "react";
import { vi, describe, it, expect } from "vitest";
import { initialState } from "../context/initialContextValues";
import scoreReducer from "./scoreReducers";
import { OptionActionKind } from "./scoreReducerTypes";

vi.mock("../context/initialContextValues", () => {
  return {
    initialState: {
      playerHand: 0,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: "",
        message: "",
      },
    },
  };
});

const TestingComponent = () => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  // useEffect(() => {
  //   dispatch(props.myaction);
  // }, []);

  return (
    <>
      <p>playerHand: {state.playerHand}</p>
    </>
  );
};
describe("scoreReducers", () => {
  it("should update the scoreReducer with playerHand", () => {
    render(<TestingComponent />);
    expect(screen.getByText(/playerHand: 0/)).toBeInTheDocument();
  });

  it("should update scoreReducer with player wins", () => {});
});
