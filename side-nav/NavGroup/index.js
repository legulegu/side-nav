import React from "react";
import "./nav-group.scss";
import classNames from "classnames";

const NavGroup = props => {
  return (
    <li className="nav-group" onClick={props.toggle}>
      {props.title}
      <ul className={("nav-group-item", { show: props.show })}>
        {props.children}
      </ul>
    </li>
  );
};

export default NavGroup;
