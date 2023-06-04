import { createContext, useContext, useReducer } from "react";
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";
import scoreReducer from "../reducers/scoreReducers";
import { initialState } from "./initialContextValues";
import {
  IOptionContext,
  IOptions,
  Props,
  HandOption,
} from "./optionContextTypes";

const options: IOptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={35} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={35} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={35} /> },
];

const OptionContext = createContext<IOptionContext>({
  options: [],
  state: initialState,
  dispatch: () => {},
});

export function OptionsProvider(props: Props) {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  const contextValue = {
    options,
    state: state,
    dispatch,
  };
  return (
    <OptionContext.Provider value={contextValue}>
      {props.children}
    </OptionContext.Provider>
  );
}

export function useOptions() {
  const context = useContext(OptionContext);
  return context;
}
