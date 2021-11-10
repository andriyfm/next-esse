import * as React from "react";

interface Props {
  title: string;
}

export const SiderMenu: React.FC<Props> = (props) => {
  return (
    <div className="px-4 space-y-4">
      <div className="text-xs tracking-wide text-gray-400 uppercase">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

React.memo(SiderMenu);
