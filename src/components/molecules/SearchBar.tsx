import * as React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center w-full gap-2 px-4 py-2 bg-gray-100 rounded-full">
      <FiSearch />
      <input type="text" placeholder="Search..." className="bg-transparent" />
    </div>
  );
};
