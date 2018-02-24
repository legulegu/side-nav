import React from "react";
import "./nav-group.scss";

class NavGroup extends React.Component {
  render() {
    return (
      <li className="nav-group">
        {this.props.title}
        <ul className="nav-group-item">{this.props.children}</ul>
      </li>
    );
  }
}

export default NavGroup;
