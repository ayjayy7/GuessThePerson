import React, { Component } from "react";

// Utils
// import { shuffle } from "./Components/utils";

// images
import imgArray from "./Images";
import Winning from "./Components/Winning";
import Loser from "./Components/Loser";

class App extends Component {
  state = {
    randomIndex: Math.floor(Math.random() * imgArray.length),
    text: "",
    status: "game"
  };
  checkInput = image => {
    if (image.name.toLowerCase() === this.state.text.toLowerCase()) {
      this.setState({ status: "won" });
    } else {
      this.setState({ status: "lose" });
    }
  };

  playagain = () => {
    {
      this.setState({ status: "game" });
    }
  };

  render() {
    let image = imgArray[this.state.randomIndex];
    if (this.state.status === "game") {
      return (
        <div className="container ">
          <div className="row">
            <div className="col-9">
              <div className="row border">
                <img alt={image.name} src={image.image}></img>
              </div>

              <input
                onChange={event => this.setState({ text: event.target.value })}
                type="text"
              />
              <button
                className="btn btn-primary"
                onClick={() => this.checkInput(image)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.status === "won") {
      return (
        <>
          <Winning />
          <button onClick={() => this.playagain()}>Play again</button>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Loser state={this.state} />
          <button onClick={() => this.playagain()}>Play again</button>
        </>
      );
    }
  }
}

export default App;
