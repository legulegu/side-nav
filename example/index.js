import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavGroup from "../side-nav/NavGroup";
import NavItem from "../side-nav/NavItem";
import Link from "../side-nav/Link";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav>
          <NavGroup title="links">
            <NavItem>
              <Link href="http://www.google.com">www.google.com</Link>
            </NavItem>
            <NavItem>
              <Link href="http://www.google.com">www.google.com</Link>
            </NavItem>
          </NavGroup>
          <NavGroup title="links">
            <NavItem>
              <Link href="http://www.google.com">www.google.com</Link>
            </NavItem>
          </NavGroup>
          <NavItem>
            <Link href="http://www.google.com">www.google.com</Link>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
