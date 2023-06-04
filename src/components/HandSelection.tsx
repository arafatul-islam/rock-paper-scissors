import { useState } from "react";
import { useOptions } from "../context/OptionContext";
import { OptionActionKind } from "../reducers/scoreReducerTypes";
import styles from "./HandSelection.module.css";
interface Props {
  name: string;
  icon: JSX.Element;
  handChoiceIndex: number;
}
const HandSelection: React.FC<Props> = ({ name, icon, handChoiceIndex }) => {
  const [handPressed, setHandPressed] = useState(false);
  const { dispatch, state } = useOptions();
  const selectedHandChoiceIndex = state.playerHand;
  const selectOption = (index: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_HAND, payload: index });
    setHandPressed(true);
  };
  return (
    <>
      <button
        className={`${styles.choiceBtn} ${
          handPressed && handChoiceIndex === selectedHandChoiceIndex
            ? styles.activeHandStyle
            : ""
        } `}
        onClick={() => selectOption(handChoiceIndex)}
      >
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelection;
