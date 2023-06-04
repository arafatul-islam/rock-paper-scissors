import HandSelection from "./../components/HandSelection";
import styles from "./ChooseAndPlay.module.css";
import { useOptions } from "../context/OptionContext";
import { generateRandomNumber } from "../utils/randomNumber";
import { OptionActionKind } from "../reducers/scoreReducerTypes";
const ChooseAndPlay = () => {
  const contextOptions = useOptions();
  const handOptions = contextOptions.options.map((option, index) => {
    return (
      <HandSelection
        key={option.name}
        name={option.name}
        icon={option.icon}
        handChoiceIndex={index}
      />
    );
  });

  const play = () => {
    const { dispatch } = contextOptions;
    const randomNumber = generateRandomNumber();
    dispatch({
      type: OptionActionKind.UPDATE_CMOPUTER_HAND,
      payload: randomNumber,
    });
    dispatch({ type: OptionActionKind.RUN_TIMER, payload: true });
  };
  return (
    <>
      <div className={styles.choiceBtnContainer}>{handOptions}</div>

      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </>
  );
};

export default ChooseAndPlay;
