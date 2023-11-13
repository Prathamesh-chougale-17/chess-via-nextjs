import { useAppContext } from "../../../context/Context";
import { copyPosition, getNewMoveNotation } from "../../../support/helper";
import { makeNewMove, clearCandidates } from "../../../reducer/actions/move";
// import Piece from '../../Pieces/Piece';
type PromotionBoxProps = {
  onClosePopup: () => void;
};
const PromotionBox = ({ onClosePopup }: PromotionBoxProps) => {
  const { appState, dispatch } = useAppContext();
  const { promotionSquare } = appState;

  if (!promotionSquare) return null;

  const color = promotionSquare.x === 7 ? "w" : "b";
  const options = ["q", "r", "b", "n"];

  const getPromotionBoxPosition = () => {
    let style: { top?: string; left?: string; right?: string } = {};

    if (promotionSquare.x === 7) {
      style.top = "-12.5%";
    } else {
      style.top = "97.5%";
    }

    if (promotionSquare.y <= 1) {
      style.left = "0%";
    } else if (promotionSquare.y >= 5) {
      style.right = "0%";
    } else {
      style.left = `${12.5 * promotionSquare.y - 20}%`;
    }

    return style;
  };

  const onClick = (option: string) => {
    onClosePopup();
    console.log(option);
    const newPosition = copyPosition(
      appState.position[appState.position.length - 1]
    );

    newPosition[promotionSquare.rank][promotionSquare.file] = "";
    newPosition[promotionSquare.x][promotionSquare.y] = color + option;
    const newMove = getNewMoveNotation({
      ...appState.selectedPiece,
      x: promotionSquare.rank,
      y: promotionSquare.file,
      position: appState.position[appState.position.length - 1],
      promotesTo: option,
    });
    dispatch(clearCandidates());

    dispatch(makeNewMove({ newPosition, newMove }));
  };

  return (
    <div
      className="popup--inner promotion-choices"
      style={getPromotionBoxPosition()}
    >
      {options.map((option) => (
        <div
          key={option}
          onClick={() => onClick(option)}
          // onClick={() => console.log(option)}
          className={`piece ${color}${option}`}
        >
          {/* {
                    <Piece
                        key={option}
                        rank={promotionSquare.rank}
                        file={promotionSquare.file}
                        piece={color + option}
                    />
                } */}
        </div>
      ))}
    </div>
  );
};

export default PromotionBox;
