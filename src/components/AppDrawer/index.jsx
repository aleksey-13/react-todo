import React from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  Icon,
  ListGroup,
  ListDivider,
} from "mdc-react";

export default function AppDrawer(props) {
  const { lists } = props;
  const listItems = [
    { icon: "home", title: "Задачи", to: "/" },
    { icon: "star", title: "Важно", to: "/important" },
    { icon: "event", title: "Запланированые", to: "/planned" },
  ];
  return (
    <Drawer id="app-drawer">
      <DrawerHeader title="React Todo"></DrawerHeader>
      <DrawerContent>
        <ListGroup>
          <List>
            {listItems.map((el) => (
              <ListItem key={el.icon} component={NavLink} to={el.to}>
                <ListItemGraphic>
                  <Icon>{el.icon}</Icon>
                </ListItemGraphic>

                <ListItemText>{el.title}</ListItemText>
              </ListItem>
            ))}
          </List>
          <ListDivider element="hr" />
          <List>
            {lists.map((el) => (
              <ListItem key={el.id} component={NavLink} to={el.id}>
                <ListItemGraphic>
                  <Icon>list</Icon>
                </ListItemGraphic>

                <ListItemText>{el.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </ListGroup>
      </DrawerContent>
    </Drawer>
  );
}
