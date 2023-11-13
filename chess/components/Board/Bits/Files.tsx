import { getCharacter } from "../../../support/helper";
import { FilesProps } from "../../../arbiter/piecesProps";
import style from "./files.module.css";
const Files = ({ files }: FilesProps) => (
  <div className={style.files}>
    {files.map((file) => (
      <span key={file}>{getCharacter(file)}</span>
    ))}
  </div>
);

export default Files;
