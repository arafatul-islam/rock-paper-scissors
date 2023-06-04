import { IInitialState } from "../context/optionContextTypes";
import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";
const scoreReducer = (state: IInitialState, action: ActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case OptionActionKind.UPDATE_PLAYER_HAND:
      return {
        ...state,
        playerHand: payload,
      };
    case OptionActionKind.UPDATE_CMOPUTER_HAND:
      return {
        ...state,
        computerHand: payload,
      };
    case OptionActionKind.RUN_TIMER:
      return {
        ...state,
        runTimer: payload,
      };
    case OptionActionKind.DRAW:
      return {
        ...state,
        results: {
          winner: "draw",
          message: payload,
        },
      };
    case OptionActionKind.PLAYER_WINS:
      return {
        ...state,
        score: { ...state.score, player: state.score.player + 1 },
        results: {
          winner: "player",
          message: payload,
        },
      };
    case OptionActionKind.COMPUTER_WINS:
      return {
        ...state,
        score: {
          ...state.score,
          computer: state.score.computer + 1,
        },
        results: {
          winner: "computer",
          message: payload,
        },
      };
    default:
      return {
        ...state,
        results: {
          winner: "error",
          message: "an error occured.",
        },
      };
  }
};

export default scoreReducer;
