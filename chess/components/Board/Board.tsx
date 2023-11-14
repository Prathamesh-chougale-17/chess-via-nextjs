import boardstyle from "./Board.module.css";
import { getKingPosition } from "../../arbiter/getMoves";
import arbiter from "../../arbiter/arbiter";
import { useAppContext } from "../../context/Context";
import Pieces from "../Pieces/Pieces";
import GameEnds from "../Popup/EndGames/EndGames";
import Popup from "../Popup/Popup";
import PromotionBox from "../Popup/PromotionBox/PromotionBox";
import Ranks from "./Bits/Ranks";
import Files from "./Bits/Files";
import "./Board.css";

const Board = () => {
  const ranks = Array(8)
    .fill(null)
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill(null)
    .map((x, i) => i + 1);

  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];

  const checkTile = (() => {
    const isInCheck = arbiter.isPlayerInCheck({
      position: position,
      positionAfterMove: position,
      player: appState.turn,
    });

    if (isInCheck) return getKingPosition(position, appState.turn);

    return null;
  })();

  const getClassName = (i: number, j: number) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark " : " tile--light ";
    if (appState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (position[i][j]) c += " attacking";
      else c += " highlight";
    }

    if (checkTile && checkTile[0] === i && checkTile[1] === j) {
      c += " checked";
    }

    return c;
  };

  return (
    <div className={boardstyle.board}>
      <Ranks ranks={ranks} />

      <div className={boardstyle.tiles}>
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div
              key={file + "" + rank}
              className={getClassName(7 - i, j)}
            ></div>
          ))
        )}
      </div>

      <Pieces />

      <Popup>
        <PromotionBox onClosePopup={() => {}} />
        <GameEnds />
      </Popup>

      <Files files={files} />
    </div>
  );
};

export default Board;
