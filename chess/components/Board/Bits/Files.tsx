import "./Files.css";
import { getCharacter } from "../../../support/helper";
import { FilesProps } from "@/chess/arbiter/piecesProps";

const Files = ({ files }: FilesProps) => (
  <div className="files">
    {files.map((file) => (
      <span key={file}>{getCharacter(file)}</span>
    ))}
  </div>
);

export default Files;
