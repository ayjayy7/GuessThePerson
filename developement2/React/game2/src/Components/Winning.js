import React from "react";
import img from "./win.gif";
function Winning(props) {
  return (
    <body className="mybackground2 ">
      <button className="button1 " onClick={() => window.location.reload()}>
        Play again
      </button>
    </body>
  );
}

export default Winning;
