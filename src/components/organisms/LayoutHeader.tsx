import * as Atom from "components/atoms";
import * as Molecule from "components/molecules";
import * as React from "react";

export const LayoutHeader: React.FC = () => {
  return (
    <header className="px-4 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center col-span-1 space-x-4">
          <Atom.ButtonToggleMenu />
          <Molecule.SearchBar />
          <Molecule.DropdownExplore />
        </div>

        <div className="flex items-center col-span-1 space-x-8">
          <Molecule.DropdownApps />
          <Molecule.DropdownProjects />
          <Molecule.DropdownNotifications />
          <Molecule.DropdownSettings />
          <Molecule.DropdownUser />
        </div>
      </div>
    </header>
  );
};
