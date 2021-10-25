import NextImage from "next/image";
import * as React from "react";

export const DropdownUser: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
      <NextImage
        src="/images/user.jpg"
        alt="user avatar"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
