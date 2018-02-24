import React from "react";
import "./link.scss";

const Link = props => {
  return (
    <a href={props.href} className="link">
      {props.children}
    </a>
  );
};

export default Link;
