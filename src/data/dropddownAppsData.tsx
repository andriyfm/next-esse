import * as React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

export type DropdownAppType = {
  name: string;
  description: string;
  icon: React.ReactElement;
};

export const dropdownAppsData: DropdownAppType[] = [
  {
    name: "linkedin",
    description: "Voluptate laborum irure quis irure labore adipisicing",
    icon: <IoLogoLinkedin />,
  },
  {
    name: "instagram",
    description: "Consectetur voluptate aliqua cillum quis",
    icon: <IoLogoInstagram />,
  },
  {
    name: "facebook",
    description: "Reprehenderit cupidatat aute consectetur veniam voluptate",
    icon: <IoLogoFacebook />,
  },
  {
    name: "twitter",
    description:
      "Ea velit consectetur culpa magna ut mollit cillum  et nostrud dolor duis laborum",
    icon: <IoLogoTwitter />,
  },
];
