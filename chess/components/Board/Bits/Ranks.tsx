import { RanksProps } from "../../../arbiter/piecesProps";
import rankstyle from "./rank.module.css";
const Ranks = ({ ranks }: RanksProps) => (
  <div className={rankstyle.ranks}>
    {ranks.map((rank) => (
      <span key={rank}>{rank}</span>
    ))}
  </div>
);

export default Ranks;
