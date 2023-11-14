import { useAppContext } from "../../../context/Context";
import Movelist from "./MovesList.module.css";
const MovesList = () => {
  const {
    appState: { movesList },
  } = useAppContext();

  return (
    <div className={Movelist.moveslist}>
      {movesList.map((move, i) => (
        <div
          className={Movelist.moves}
          key={i}
          data-number={Math.floor(i / 2) + 1}
        >
          {move}
        </div>
      ))}
    </div>
  );
};

export default MovesList;
