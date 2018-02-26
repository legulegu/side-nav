import React from "react";
import "./nav-item.scss";

const NavItem = props => {
  const handleClick = e => {
    e.stopPropagation();
    props.handleNavItemClick && props.handleNavItemClick(e);
  };
  return (
    <li className="nav-item" onClick={handleClick}>
      {props.children}
    </li>
  );
};

export default NavItem;
