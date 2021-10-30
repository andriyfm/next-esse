import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  name?: string;
  icon?: React.ReactElement;
  children: React.ReactElement | React.ReactElement[];
  menuPosition?: "bottom-left" | "bottom-right" | "top-right" | "top-left";
}

export const DropdownMenu: React.FC<Props> = (props) => {
  const getMenuPositionStyle = () => {
    switch (props.menuPosition) {
      case "bottom-right":
        return "mt-4 right-0 origin-top-right";
      case "top-right":
        return "mb-14 -bottom-full right-0 origin-bottom-right";
      case "top-left":
        return "mb-14 -bottom-full left-0 origin-bottom-left";
      default:
        return "mt-4 left-0 origin-top-left";
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-1 text-sm font-semibold uppercase">
        {props.icon ? (
          props.icon
        ) : (
          <React.Fragment>
            <span className="leading-normal">{props.name}</span>
            <IoChevronDown className="text-xs text-gray-400" />
          </React.Fragment>
        )}
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${getMenuPositionStyle()}`}
        >
          {props.children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

DropdownMenu.defaultProps = {
  menuPosition: "bottom-right",
};
