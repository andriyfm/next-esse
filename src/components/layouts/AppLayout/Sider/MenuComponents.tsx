import { SiderMenu } from "@atoms/SiderMenu";
import { AccordionMenu } from "@molecules/AccordionMenu";
import {
  dataMenuCharts,
  dataMenuComponents,
  dataMenuForms,
  dataMenuIcons,
  dataMenuNotifcations,
  dataMenuTables,
} from "data/siderMenuData";
import * as React from "react";
import {
  IoAccessibilityOutline,
  IoLayersOutline,
  IoNotificationsOutline,
  IoPulseOutline,
  IoReaderOutline,
  IoReorderFourOutline,
} from "react-icons/io5";

interface Props {}

export const MenuComponents: React.FC<Props> = (props) => {
  return (
    <SiderMenu title="components">
      <AccordionMenu
        name="ui elements"
        icon={<IoLayersOutline />}
        items={dataMenuComponents}
      />
      <AccordionMenu
        name="forms"
        icon={<IoReaderOutline />}
        items={dataMenuForms}
      />
      <AccordionMenu
        name="tables"
        icon={<IoReorderFourOutline />}
        items={dataMenuTables}
      />
      <AccordionMenu
        name="notifications"
        icon={<IoNotificationsOutline />}
        items={dataMenuNotifcations}
      />
      <AccordionMenu
        name="charts"
        icon={<IoPulseOutline />}
        items={dataMenuCharts}
      />
      <AccordionMenu
        name="icons"
        icon={<IoAccessibilityOutline />}
        items={dataMenuIcons}
      />
    </SiderMenu>
  );
};

React.memo(MenuComponents);
