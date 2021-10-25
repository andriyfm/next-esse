import { Menu } from "@headlessui/react";
import * as Atom from "components/atoms";
import { dropdownExploreData } from "data/dropdownExploreData";
import * as React from "react";

export const DropdownExplore: React.FC = () => {
  return (
    <Atom.DropdownMenu name="explore" menuPosition="bottom-left">
      {dropdownExploreData.map((item) => (
        <Menu.Item key={item.name}>
          {({ active }) => (
            <button className="flex max-w-xs px-3 py-2 space-x-2 text-sm rounded-md hover:bg-gray-50 group">
              <div className="flex items-center justify-center flex-none w-6 h-6 text-xl text-white bg-blue-600 rounded-full">
                {item.icon}
              </div>
              <div className="flex-1 text-left truncate">
                <div className="text-sm font-semibold capitalize truncate">
                  {item.name}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {item.description}
                </div>
              </div>
            </button>
          )}
        </Menu.Item>
      ))}
    </Atom.DropdownMenu>
  );
};
