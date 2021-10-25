import * as React from "react";
import { IoChatboxOutline } from "react-icons/io5";

export const DropdownChat: React.FC = () => {
  return (
    <div>
      {/* dropdown button */}
      <button className="flex items-center">
        <IoChatboxOutline className="text-xl" />
      </button>

      {/* dropdown menu here... */}
    </div>
  );
};
