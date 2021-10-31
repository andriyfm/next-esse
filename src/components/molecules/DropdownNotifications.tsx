import { DropdownMenu } from "@atoms/DropdownMenu";
import { Menu } from "@headlessui/react";
import { notificationsData } from "data/notificationsData";
import * as React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const IconButton: React.FC = () => {
  return (
    <div className="relative before:w-2 before:h-2 before:rounded-full before:bg-red-500 before:top-0 before:right-0 before:absolute">
      <IoNotificationsOutline className="relative text-xl" />
    </div>
  );
};

export const DropdownNotifications: React.FC = () => {
  return (
    <DropdownMenu icon={<IconButton />}>
      {notificationsData.map((item, i) => (
        <Menu.Item
          key={i}
          as="button"
          className="bg-white hover:bg-gray-50 min-w-[256px] py-2 px-3 text-sm rounded-md group"
        >
          <div className="text-left w-[256px]">
            <div className="w-full font-semibold truncate">{item.title}</div>
            <div className="w-full text-gray-400 truncate">
              {item.description}
            </div>
          </div>
        </Menu.Item>
      ))}
    </DropdownMenu>
  );
};
