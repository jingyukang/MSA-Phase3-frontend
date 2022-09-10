import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div id="navbar_logo">
        <h1>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            MSA-JIN
          </Link>
        </h1>
      </div>
      <div id="navbar_menus">
        <List>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText>Storage</ListItemText>
            </ListItem>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText>Storage</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    </nav>
  );
};

export default Navbar;
