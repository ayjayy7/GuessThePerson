import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { add_movie } from "./redux/actions/index";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div id="add" className="input-group mb-3">
        <div className="col-s-4">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Add A Movie..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
        </div>
        <div className="input-group-append">
          <button
            onClick={() => {
              if (this.state.value !== "") {
                this.props.add_movie({
                  title: this.state.value,
                  status: false
                });
                this.setState({ value: "" });
              }
            }}
            className="btn btn-info"
            type="button"
          >
            <span className="add">Add Movie</span>
            <FontAwesomeIcon className="plus" icon={faPlusCircle} />
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add_movie: movie => dispatch(add_movie(movie))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
