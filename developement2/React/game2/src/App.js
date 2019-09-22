import React, { Component } from "react";

// Utils
// import { shuffle } from "./Components/utils";

// images
import imgArray from "./Images";
import Winning from "./Components/Winning";
import Loser from "./Components/Loser";
import "./App.css";

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
        <div className="mybackground">
          <div className="container ">
            <div className="row">
              <img
                className="mx-auto d-block mt-5 rounded shadow-lg mb-5"
                alt={image.name}
                src={image.image}
                height="500px"
              ></img>
            </div>

            <input
              className="mx-auto d-block rounded-pill shadow"
              onChange={event => this.setState({ text: event.target.value })}
              type="text"
            />
            <button
              className="btn btn-lg btn-warning rounded-pill position"
              onClick={() => this.checkInput(image)}
            >
              Is it me?
            </button>
          </div>
        </div>
      );
    } else if (this.state.status === "won") {
      return (
        <>
          <Winning playagain={this.playagain} />
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Loser playagain={this.playagain} />
        </>
      );
    }
  }
}

export default App;
