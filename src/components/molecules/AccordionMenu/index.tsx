import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import * as React from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

type MenuType = {
  name: string;
  href: string;
};

export interface AccordionMenuProps {
  name: string;
  icon: React.ReactNode;
  items: MenuType[];
}

export const AccordionMenu: React.FC<AccordionMenuProps> = (props) => {
  return (
    <Disclosure as="div">
      <Disclosure.Button className="w-full hover:text-blue-500">
        {({ open }) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {props.icon}
              <span className="capitalize">{props.name}</span>
            </div>
            {open ? <IoChevronDown /> : <IoChevronForward />}
          </div>
        )}
      </Disclosure.Button>

      <Disclosure.Panel className="mt-1 ml-8">
        {props.items.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="block py-2 text-gray-400 capitalize hover:text-blue-500">
              {item.name}
            </a>
          </Link>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
};

React.memo(AccordionMenu);
