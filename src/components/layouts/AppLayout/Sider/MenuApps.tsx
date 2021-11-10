import { SiderMenu } from "@atoms/SiderMenu";
import { AccordionMenu } from "@molecules/AccordionMenu";
import { dataMenuApps, dataMenuEcommerce } from "data/siderMenuData";
import * as React from "react";
import { IoCartOutline, IoServerOutline } from "react-icons/io5";

interface Props {}

export const MenuApps: React.FC<Props> = (props) => {
  return (
    <SiderMenu title="application">
      <AccordionMenu
        name="apps"
        icon={<IoServerOutline />}
        items={dataMenuApps}
      />
      <AccordionMenu
        name="e-commerce"
        icon={<IoCartOutline />}
        items={dataMenuEcommerce}
      />
    </SiderMenu>
  );
};

React.memo(MenuApps);
