import React from "react";
import { Drawer, DrawerHeader, DrawerContent, List, ListItem, ListItemGraphic, ListItemText, Icon } from "mdc-react";

export default function AppDrawer(props) {
  const listItems = [
    {icon: 'home', label: 'Задачи'},
    {icon: 'star', label: 'Важно'},
    {icon: 'event', label: 'Запланированые'},
  ]
  return (
    <Drawer id="app-drawer">
      <DrawerHeader title="React Todo"></DrawerHeader>
      <DrawerContent>
        <List>
          { listItems.map(el => (
            <ListItem>
              <ListItemGraphic>
                <Icon>{el.icon}</Icon>
              </ListItemGraphic>

              <ListItemText>
                {el.label}
              </ListItemText>
            </ListItem>
          )) }
          
        </List>
      </DrawerContent>
    </Drawer>
  );
}
