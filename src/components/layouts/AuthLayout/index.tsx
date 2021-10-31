import * as Atom from "components/atoms";
import * as React from "react";

export const AuthLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />
      <main className="p-4">{props.children}</main>
    </React.Fragment>
  );
};
