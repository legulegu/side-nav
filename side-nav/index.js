import React from "react";
import ReactDOM from "react-dom";
import Link from "./link";

const App = () => {
  return (
    <div>
      <Link href="http://www.google.com">www.google.com</Link>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
