import React from "react";
import NavGroup from "../NavGroup";
import NavItem from "../NavItem";

import "./nav.scss";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: props.openedItem
    };
  }
  render() {
    let navGroupIndex = 0;
    let navItemIndex = 0;
    const clonedChildren = React.Children.map(this.props.children, child => {
      if (child.type === NavGroup) {
        navGroupIndex++;
        return React.cloneElement(child, { index: navGroupIndex });
      }
      if (child.type === NavItem) {
        navItemIndex++;
        return React.cloneElement(child, { index: navItemIndex });
      }
    });
    return <ul className="nav">{clonedChildren}</ul>;
  }
}

export default Nav;
