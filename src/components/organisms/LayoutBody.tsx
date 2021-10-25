import * as React from "react";

export const LayoutBody: React.FC = (props) => {
  return <main className="p-4">{props.children}</main>;
};
