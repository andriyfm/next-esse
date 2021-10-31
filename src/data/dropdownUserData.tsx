import * as React from "react";
import {
  IoMailOutline,
  IoPersonOutline,
  IoStarOutline,
  IoLogOutOutline,
} from "react-icons/io5";

export type DropdownUserType = {
  icon: React.ReactElement;
  name: string;
  countNumber?: number;
  countColor?: "red" | "green" | "blue" | "orange" | "pink";
};

export const dropdownUserData: DropdownUserType[] = [
  {
    icon: <IoMailOutline />,
    name: "mail",
    countNumber: 99,
    countColor: "pink",
  },
  {
    icon: <IoStarOutline />,
    name: "messages",
    countNumber: 3,
    countColor: "orange",
  },
  {
    icon: <IoPersonOutline />,
    name: "profile",
  },
  {
    icon: <IoLogOutOutline />,
    name: "logout",
  },
];
