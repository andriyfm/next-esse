import * as React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import * as Atom from "components/atoms";
import { Menu } from "@headlessui/react";
import { dropdownProjectsData as data } from "data/dropdownProjectsData";

export const DropdownProjects: React.FC = () => {
  return (
    <Atom.DropdownMenu icon={<IoChatboxOutline className="text-xl" />}>
      {data.map((item) => (
        <Menu.Item
          key={item.name}
          as="button"
          className="bg-white hover:bg-gray-50 min-w-[256px] py-2 px-3 text-sm rounded-md group"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold capitalize">{item.name}</div>
            <div className="text-sm text-gray-400">{item.percentage}%</div>
          </div>
          <Atom.ProgressBar value={item.percentage} variant={item.color} />
        </Menu.Item>
      ))}
    </Atom.DropdownMenu>
  );
};
