import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes";

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerHandName: string,
  computerHandName: string
) => {
  if (playerHandName === computerHandName) {
    dispatch({ type: OptionActionKind.DRAW, payload: "we have a draw" });
  } else if (playerHandName === "rock") {
    if (computerHandName === "paper") {
      dispatch({
        type: OptionActionKind.COMPUTER_WINS,
        payload: "computer won",
      });
    } else {
      dispatch({ type: OptionActionKind.PLAYER_WINS, payload: "player won" });
    }
  } else if (playerHandName === "paper") {
    if (computerHandName === "rock") {
      dispatch({ type: OptionActionKind.PLAYER_WINS, payload: "player won" });
    } else {
      dispatch({
        type: OptionActionKind.COMPUTER_WINS,
        payload: "computer won",
      });
    }
  } else if (playerHandName === "scissors") {
    if (computerHandName === "paper") {
      dispatch({ type: OptionActionKind.PLAYER_WINS, payload: "player won" });
    } else {
      dispatch({
        type: OptionActionKind.COMPUTER_WINS,
        payload: "computer won",
      });
    }
  }
};
