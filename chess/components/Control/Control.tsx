import React from "react";
import Controlcss from "./Control.module.css";
const Control = ({ children }: { children: React.ReactNode }) => {
  return <div className={Controlcss.control}>{children}</div>;
};

export default Control;
