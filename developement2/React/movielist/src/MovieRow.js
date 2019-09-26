import React, { Component } from "react";
import { connect } from "react-redux";
import { delete_movie, change_status } from "./redux/actions/index";

class MovieRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.movie.title}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => this.props.change_status(this.props.movie)}
          >
            {this.props.status}
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.delete_movie(this.props.movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change_status: movie => dispatch(change_status(movie)),
    delete_movie: movie => dispatch(delete_movie(movie))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
