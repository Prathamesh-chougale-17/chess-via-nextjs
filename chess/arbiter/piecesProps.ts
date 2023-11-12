import exp from "constants";

export interface MoveComplexPieceProps {
    position: string[][];
    piece: string;
    rank: number;
    file: number;
    x: number;
    y: number;
}

export interface movePieceProps {
    position: string[][];
    piece: string;
    rank: number;
    file: number;
}

export interface getPawnCapturesProps {
    position: string[][],
    prevPosition: string[][],
    piece: string,
    rank: number,
    file: number
}

export interface getCastlingMovesProps {
    position: string[][],
    castleDirection: 'right' | 'left' | 'none',
    piece: string,
    rank: number,
    file: number
}

export interface getCastlingDirectionsProps {
    castleDirection: { [key: string]: string },
    piece: string,
    rank: number,
    file: number
}

export interface getRegularMovesProps {
    position: string[][],
    castleDirection: 'right' | 'left' | 'none',
    prevPosition: string[][],
    piece: string,
    rank: number,
    file: number
}

export interface isPlayerInCheckProps {
    positionAfterMove: string[][],
    position: string[][],
    player: string
}

/*

    castleDirection: any;
    prevPosition: any;
    piece: any;
    rank: any;
    file: any;*/