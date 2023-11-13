import React from "react";
const Control = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col p-3 text-center h-4">{children}</div>;
};

export default Control;
