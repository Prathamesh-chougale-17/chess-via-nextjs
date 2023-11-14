"use client";
import Board from "./components/Board/Board";
import MovesList from "./components/Control/Bits/MovesList";
import TakeBack from "./components/Control/Bits/TakeBack";
import Control from "./components/Control/Control";
import AppContext from "./context/Context";
import { reducer } from "./reducer/reducer";
import { initGameState } from "./support/constants";
import { useReducer } from "react";

const Chess = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
};

export default Chess;
