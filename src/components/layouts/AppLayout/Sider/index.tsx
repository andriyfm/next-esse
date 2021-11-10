import { Logo } from "@atoms/Logo";
import * as React from "react";
import { MenuApps } from "./MenuApps";
import { MenuComponents } from "./MenuComponents";
import { MenuPages } from "./MenuPages";

export const Sider: React.FC = () => {
  return (
    <aside className="min-h-screen space-y-6 bg-white border-r">
      <Logo />
      <MenuApps />
      <MenuComponents />
      <MenuPages />
    </aside>
  );
};
