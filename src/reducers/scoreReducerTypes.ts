export enum OptionActionKind {
  UPDATE_PLAYER_HAND = "UPDATE_PLAYER_HAND",
  UPDATE_CMOPUTER_HAND = "UPDATE_CMOPUTER_HAND",
  RUN_TIMER = "RUN_TIMER",
  DRAW = "DRAW",
  PLAYER_WINS = "PLAYER_WINS",
  COMPUTER_WINS = "COMPUTER_WINS",
}

interface UpdatePlayerChoice {
  type: OptionActionKind.UPDATE_PLAYER_HAND;
  payload: number;
}

interface UpdateComputerChoice {
  type: OptionActionKind.UPDATE_CMOPUTER_HAND;
  payload: number;
}

interface RunTimer {
  type: OptionActionKind.RUN_TIMER;
  payload: boolean;
}

interface Draw {
  type: OptionActionKind.DRAW;
  payload: string;
}

interface PlayerWins {
  type: OptionActionKind.PLAYER_WINS;
  payload: string;
}

interface ComputerWins {
  type: OptionActionKind.COMPUTER_WINS;
  payload: string;
}

export type ActionTypes =
  | UpdatePlayerChoice
  | UpdateComputerChoice
  | RunTimer
  | Draw
  | PlayerWins
  | ComputerWins;
