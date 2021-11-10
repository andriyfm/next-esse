import { SiderMenu } from "@atoms/SiderMenu";
import { AccordionMenu } from "@molecules/AccordionMenu";
import { dataMenuAuth, dataMenuPages, dataMenuUsers } from "data/siderMenuData";
import * as React from "react";
import {
  IoGolfOutline,
  IoLaptopOutline,
  IoPeopleOutline,
} from "react-icons/io5";

interface Props {}

export const MenuPages: React.FC<Props> = (props) => {
  return (
    <SiderMenu title="pages">
      <AccordionMenu
        name="authentication"
        icon={<IoGolfOutline />}
        items={dataMenuAuth}
      />
      <AccordionMenu
        name="users"
        icon={<IoPeopleOutline />}
        items={dataMenuUsers}
      />
      <AccordionMenu
        name="pages"
        icon={<IoLaptopOutline />}
        items={dataMenuPages}
      />
    </SiderMenu>
  );
};

React.memo(MenuPages);
