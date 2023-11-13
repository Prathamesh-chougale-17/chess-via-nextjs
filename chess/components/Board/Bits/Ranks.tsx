import { RanksProps } from "@/chess/arbiter/piecesProps";
import "./Ranks.css";

const Ranks = ({ ranks }: RanksProps) => (
  <div className="ranks">
    {ranks.map((rank) => (
      <span key={rank}>{rank}</span>
    ))}
  </div>
);

export default Ranks;
