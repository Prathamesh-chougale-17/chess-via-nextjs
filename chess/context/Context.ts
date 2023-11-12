import { createContext, useContext } from 'react';
interface AppState {
    appState: {
        candidateMoves: any;
        promotionSquare: {
            x: number
            y: number
            rank: number
            file: number
        }
        position: string[][];
        selectedPiece: any
        turn: string
    }; // add an appState property
    dispatch: (e: any) => void; // add a dispatch property
}
const AppContext = createContext<AppState>({} as AppState); // create a context with an empty object});

export function useAppContext() {
    return useContext(AppContext);
}

export default AppContext;
