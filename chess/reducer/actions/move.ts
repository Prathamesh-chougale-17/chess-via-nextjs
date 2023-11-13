import { generateCandidatesProps, makeNewMoveProps } from '../../arbiter/piecesProps';
import actionTypes from '../actionTypes';

export const makeNewMove = ({ newPosition, newMove }: makeNewMoveProps) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: { newPosition, newMove },
    }
}

export const clearCandidates = () => {
    return {
        type: actionTypes.CLEAR_CANDIDATE_MOVES,
    }
}

export const generateCandidates = ({ candidateMoves }: generateCandidatesProps) => {
    return {
        type: actionTypes.GENERATE_CANDIDATE_MOVES,
        payload: { candidateMoves }
    }
}

export const takeBack = () => {
    return {
        type: actionTypes.TAKE_BACK,
    }
}
