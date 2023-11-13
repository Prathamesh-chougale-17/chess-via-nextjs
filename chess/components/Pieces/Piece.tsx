import "./Pieces.css";
import arbiter from "../../arbiter/arbiter";
import { useAppContext } from "../../context/Context";
import { generateCandidates } from "../../reducer/actions/move";

const Piece = ({ rank, file, piece }: any) => {
  const { appState, dispatch } = useAppContext();
  const { turn, castleDirection, position: currentPosition } = appState;

  const onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);

    if (turn === piece[0]) {
      const candidateMoves = arbiter
        .getValidMoves({
          position: currentPosition[currentPosition.length - 1],
          prevPosition: currentPosition[currentPosition.length - 2],
          castleDirection: castleDirection[
            turn as keyof typeof castleDirection
          ] as "right" | "left" | "none",
          piece,
          file,
          rank,
        })
        .map((move) => move.join("") as string); // convert [number, number] tuples to strings
      dispatch(generateCandidates({ candidateMoves }));
    }
  };
  const onDragEnd = (e: any) => {
    e.target.style.display = "block";
  };

  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default Piece;
