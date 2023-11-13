import { useAppContext } from "../../../context/Context";

const MovesList = () => {
  const {
    appState: { movesList },
  } = useAppContext();

  return (
    <div className="flex flex-row flex-1 flex-wrap content-center overflow-auto font-medium">
      {movesList.map((move, i) => (
        <div
          className="basis-[35%] pl-[15%] text-left relative pb-2 odd:before:content-[data-number] odd:before:absolute odd:before:left-0 odd:before:opacity-50"
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
