import * as React from "react";
import { IoCubeOutline } from "react-icons/io5";

export const DropdownApps: React.FC = () => {
  return (
    <div>
      {/* dropdown button */}
      <button className="flex items-center">
        <IoCubeOutline className="text-xl" />
      </button>

      {/* dropdown menu here... */}
    </div>
  );
};
