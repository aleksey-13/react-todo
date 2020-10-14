import React from "react";
import { Drawer, DrawerHeader, DrawerContent } from "mdc-react";

export default function AppDrawer(props) {
  return (
    <Drawer id="app-drawer">
      <DrawerHeader title="React Todo"></DrawerHeader>
      <DrawerContent></DrawerContent>
    </Drawer>
  );
}
