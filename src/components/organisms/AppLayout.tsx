import * as Atom from "components/atoms";
import * as Molecule from "components/molecules";
import * as React from "react";

export const AppLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />

      <div>
        <Molecule.Sider />
        <div>
          <Molecule.Header />
          <Molecule.Body>{props.children}</Molecule.Body>
          <Molecule.Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
