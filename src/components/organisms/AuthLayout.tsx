import * as Atom from "components/atoms";
import * as Molecule from "components/molecules";
import * as React from "react";

export const AuthLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />
      <Molecule.Body>{props.children}</Molecule.Body>
    </React.Fragment>
  );
};
