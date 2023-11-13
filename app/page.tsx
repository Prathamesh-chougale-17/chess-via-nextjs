"use client";
import Board from "@/chess/components/Board/Board";
import MovesList from "@/chess/components/Control/Bits/MovesList";
import TakeBack from "@/chess/components/Control/Bits/TakeBack";
import Control from "@/chess/components/Control/Control";
import AppContext from "@/chess/context/Context";
import { reducer } from "@/chess/reducer/reducer";
import { initGameState } from "@/chess/support/constants";
import { useReducer } from "react";

export default function Home() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
      <div className="grid place-content-center h-full bg-slate-600">
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
}
