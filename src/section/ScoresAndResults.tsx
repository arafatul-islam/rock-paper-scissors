import { useEffect, useState } from "react";
import { useOptions } from "../context/OptionContext";
import styles from "./ScoresAndResults.module.css";
import { OptionActionKind } from "../reducers/scoreReducerTypes";
import { checkWinner } from "../utils/checkWinner";
const ScoresAndResults = () => {
  const [timer, setTimer] = useState<number>(3);
  const { state, dispatch, options } = useOptions();
  const runTimer = state.runTimer;
  const { winner, message } = state.results;

  const playerHandIndex = state.playerHand;
  const playerHandName = options[playerHandIndex].name;
  const playerHandIcon = options[playerHandIndex].icon;
  const playerScore = state.score.player;

  const computerHandIndex = state.computerHand;
  const computerHandName = options[computerHandIndex].name;
  const computerHandIcon = options[computerHandIndex].icon;
  const computerScore = state.score.computer;

  useEffect(() => {
    if (runTimer) {
      const timeIntervalID = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(timeIntervalID);
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
      checkWinner(dispatch, playerHandName, computerHandName);
    }
  }, [timer]);

  return (
    <>
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player: {playerScore}</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Computer: {computerScore}</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          {!runTimer && winner && (
            <div>
              <p>{playerHandIcon}</p>
              <p>{playerHandName}</p>
            </div>
          )}
        </div>
        <div className={styles.midCol}>
          {runTimer && (
            <p data-testid="timer" className={styles.timer}>
              {timer}
            </p>
          )}

          {!runTimer && winner && (
            <>
              <p>{winner} wins</p>
              <p className={styles.message}>{message}</p>
            </>
          )}
        </div>
        <div className={styles.computerHand}>
          {!runTimer && winner && (
            <div>
              <p>{computerHandIcon}</p>
              <p>{computerHandName}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScoresAndResults;
