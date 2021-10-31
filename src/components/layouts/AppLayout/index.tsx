import * as Atom from "components/atoms";
import * as React from "react";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutSider } from "./LayoutSider";

export const AppLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />

      <div className="flex items-start justify-start">
        <div className="w-64">
          <LayoutSider />
        </div>
        <div className="flex-1">
          <LayoutHeader />
          <main className="p-4">{props.children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
