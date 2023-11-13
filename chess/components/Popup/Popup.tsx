import React, { ReactNode } from "react";
import { Status } from "../../support/constants";
import { useAppContext } from "../../context/Context";
import { closePopup } from "../../reducer/actions/popup";
import "./Popup.css";

const Popup = ({ children }: { children: ReactNode }) => {
  const {
    appState: { status },
    dispatch,
  } = useAppContext();

  const onClosePopup = () => {
    dispatch(closePopup());
  };

  if (status === Status.ongoing) return null;

  return (
    <div className="popup">
      {React.Children.toArray(children).map((child: any) =>
        React.cloneElement(child, { onClosePopup })
      )}
    </div>
  );
};

export default Popup;
