import React, { Component } from "react";

import "./App.css";

import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";

import { connect } from "react-redux";

// import { Route } from "react-router-dom";

class App extends Component {
  render() {
    let watch_list = this.props.movies.filter(movie => movie.status === false);
    let watched_list = this.props.movies.filter(movie => movie.status === true);
    return (
      <div className="App ">
        <div className="container">
          <AddMovie />
          <div className="row">
            <MoviesList
              className="col-6 "
              movielist={watch_list}
              status="Watched"
              title="Watchlist"
            />
            <MoviesList
              className="col-6 "
              movielist={watched_list}
              status="Unwatch"
              title="Watched"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movieState.movies
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
