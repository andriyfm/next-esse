import * as Atom from "components/atoms";
import * as Organism from "components/organisms";
import * as React from "react";

export const AuthLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />
      <Organism.LayoutBody>{props.children}</Organism.LayoutBody>
    </React.Fragment>
  );
};
