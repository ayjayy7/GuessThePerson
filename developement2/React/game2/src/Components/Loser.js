import React from "react";

function Loser(props) {
  return (
    <body className="mybackground3 ">
      <button
        className="button2 btn btn-warning"
        onClick={() => window.location.reload()}
      >
        Play again LOSER
      </button>
    </body>
  );
}

export default Loser;
