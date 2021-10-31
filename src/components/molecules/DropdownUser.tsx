import { DropdownMenu } from "@atoms/DropdownMenu";
import { Menu } from "@headlessui/react";
import { dropdownUserData } from "data/dropdownUserData";
import NextImage from "next/image";
import * as React from "react";

const IconButton: React.FC = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
        <NextImage
          src="/images/user.jpg"
          alt="user avatar"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute min-w-[20px] min-h-[20px] flex justify-center items-center -top-1 -right-1 text-xs text-white bg-red-500 rounded-full">
        2
      </div>
    </div>
  );
};

export const DropdownUser: React.FC = () => {
  return (
    <DropdownMenu icon={<IconButton />}>
      {dropdownUserData.map((item, i) => (
        <Menu.Item
          key={i}
          as="button"
          className="bg-white hover:bg-gray-50 min-w-[256px] py-2 px-3 text-sm rounded-md group"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-none text-xl">{item.icon}</div>
            <div className="flex-1 font-semibold text-left capitalize">
              {item.name}
            </div>
            {item.countNumber && (
              <div className="flex-none px-1 text-xs min-w-[20px] min-h-[20px] flex justify-center items-center font-semibold text-white rounded-full bg-red-500">
                {item.countNumber}
              </div>
            )}
          </div>
        </Menu.Item>
      ))}
    </DropdownMenu>
  );
};
