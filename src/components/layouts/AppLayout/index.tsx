import * as Atom from "components/atoms";
import * as React from "react";
import { Sider } from "./Sider";
import { Topbar } from "./Topbar";

export const AppLayout: React.FC = (props) => {
  return (
    <React.Fragment>
      <Atom.PageHead />

      <div className="flex items-start justify-start">
        <div className="w-64">
          <Sider />
        </div>
        <div className="flex-1">
          <Topbar />
          <main className="p-4">{props.children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};
