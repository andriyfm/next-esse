import * as React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export const DropdownNotifications: React.FC = () => {
  return (
    <div>
      {/* dropdown button */}
      <button className="flex items-center">
        <IoNotificationsOutline className="text-xl" />
      </button>

      {/* dropdown menu here... */}
    </div>
  );
};
