import React from "react";
import "./nav.scss";

const NavGroup = props => {
  return (
    <ul className="nav">
      {props.children}
    </ul>
  );
};

export default NavGroup;
