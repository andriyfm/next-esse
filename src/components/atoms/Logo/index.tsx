import * as React from "react";
import { IoShapes } from "react-icons/io5";

interface Props {}

export const Logo: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center h-16 px-4 space-x-3">
      <IoShapes className="text-xl text-blue-500" />
      <div className="text-xl font-bold uppercase">esse</div>
    </div>
  );
};

React.memo(Logo);
