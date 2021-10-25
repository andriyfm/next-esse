import * as Atom from "components/atoms";
import * as Organism from "components/organisms";
import * as React from "react";

export const AppLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />

      <div className="flex items-start justify-start">
        <div className="w-64">
          <Organism.LayoutSider />
        </div>
        <div className="flex-1">
          <Organism.LayoutHeader />
          <Organism.LayoutBody>{props.children}</Organism.LayoutBody>
        </div>
      </div>
    </React.Fragment>
  );
};
