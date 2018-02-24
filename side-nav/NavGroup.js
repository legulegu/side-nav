import React from "react";
import "./nav-group.scss";

const NavGroup = props => {
  return (
    <li className="nav-group">
      <ul>{props.children}</ul>
    </li>
  );
};

export default NavGroup;
