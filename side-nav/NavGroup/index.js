import React from "react";
import classNames from "classnames";
import "./nav-group.scss";

const NavGroup = props => {
  const handleClick = e => {
    props.handleOnNavGroupClick(e, props.index);
  };

  return (
    <li className="nav-group" onClick={handleClick}>
      {props.title}
      <ul className={classNames("nav-group-item", { show: props.show })}>
        {props.children}
      </ul>
    </li>
  );
};

export default NavGroup;
