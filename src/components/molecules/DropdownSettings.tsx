import * as React from "react";
import { IoSettingsOutline } from "react-icons/io5";

export const DropdownSettings: React.FC = () => {
  return (
    <div>
      {/* dropdown button */}
      <button className="flex items-center">
        <IoSettingsOutline className="text-xl" />
      </button>

      {/* dropdown menu here... */}
    </div>
  );
};
