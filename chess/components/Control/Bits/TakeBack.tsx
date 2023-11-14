import { useAppContext } from "../../../context/Context";
import { takeBack } from "../../../reducer/actions/move";
import TakeBackcss from "./TakeBack.module.css";

const TakeBack = () => {
  const { dispatch } = useAppContext();

  return (
    <div>
      <button
        className={TakeBackcss.takeback}
        onClick={() => dispatch(takeBack())}
      >
        Take Back
      </button>
    </div>
  );
};

export default TakeBack;
