import * as React from "react";
import {
  IoAnalyticsOutline,
  IoApertureOutline,
  IoBowlingBallOutline,
  IoFlameOutline,
} from "react-icons/io5";

export type DropdownExploreType = {
  name: string;
  description: string;
  icon: React.ReactElement;
};

export const dropdownExploreData: DropdownExploreType[] = [
  {
    name: "teams",
    description: "Voluptate laborum irure quis irure labore adipisicing",
    icon: <IoAnalyticsOutline />,
  },
  {
    name: "meetups",
    description: "Consectetur voluptate aliqua cillum quis",
    icon: <IoApertureOutline />,
  },
  {
    name: "features",
    description: "Reprehenderit cupidatat aute consectetur veniam voluptate",
    icon: <IoFlameOutline />,
  },
  {
    name: "blog",
    description:
      "Ea velit consectetur culpa magna ut mollit cillum  et nostrud dolor duis laborum",
    icon: <IoBowlingBallOutline />,
  },
];
