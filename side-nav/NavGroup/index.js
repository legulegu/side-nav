import React from "react";
import classNames from "classnames";
import "./nav-group.scss";

const NavGroup = props => {
  const handleClick = e => {
    props.handleOnNavGroupClick(e, props.index);
  };
  let navItemIndex = 0;
  const clonedChildren = React.Children.map(props.children, child => {
    navItemIndex++;
    return React.cloneElement(child, {
      level: props.title,
      index: navItemIndex
    });
  });
  return (
    <li className="nav-group" onClick={handleClick}>
      {props.title}
      <ul className={classNames("nav-group-item", { show: props.show })}>
        {clonedChildren}
      </ul>
    </li>
  );
};

export default NavGroup;
