import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import NavGroup from "./NavGroup";
import NavItem from "./NavItem";
import Link from "./Link";

const App = () => {
  return (
    <div>
      <Nav>
        <NavGroup title="links">
          <NavItem>
            <Link href="http://www.google.com">www.google.com</Link>
          </NavItem>
          <NavItem>
            <Link href="http://www.google.com">www.google.com</Link>
          </NavItem>
        </NavGroup>
        <NavItem>
          <Link href="http://www.google.com">www.google.com</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
