import * as React from "react";
import { IoChevronDown } from "react-icons/io5";

export const DropdownExplore: React.FC = () => {
  return (
    <div>
      {/* dropdown button */}
      <button className="flex items-center space-x-1 text-sm font-semibold uppercase">
        <div className="leading-normal">explore</div>
        <IoChevronDown className="text-xs text-gray-400" />
      </button>

      {/* dropdown menu here.. */}
    </div>
  );
};
