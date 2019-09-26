import React, { Component } from "react";
import "./index.css";
import MovieRow from "./MovieRow";
import SearchBar from "./SearchBar";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.movielist,
      query: ""
    };
    this.filterMovies = this.filterMovies.bind(this);
  }
  filterMovies(query) {
    query = query.toLowerCase();
    let filteredMovies = this.props.movielist.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredMovies, query });
  }
  componentDidUpdate(props) {
    if (props.movielist !== this.props.movielist) {
      this.filterMovies(this.state.query);
    }
  }
  render() {
    let movieRows = (
      <tbody id="table">
        <td>Nothing Found!</td>
      </tbody>
    );
    if (this.props.movielist.length >= 1) {
      movieRows = this.state.filteredMovies.map(movie => (
        <MovieRow key={movie.title} movie={movie} status={this.props.status} />
      ));
    }
    return (
      <div className="ListTable col-6 mt-3">
        <h3>
          {this.props.title}{" "}
          <span className="badge badge-pill badge-info">
            {this.props.movielist.length}
          </span>
        </h3>
        <SearchBar changeHandler={this.filterMovies} />
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Movie Name</th>
            </tr>
          </thead>
          {movieRows}
        </table>
      </div>
    );
  }
}
export default MoviesList;
