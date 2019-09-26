import { ADD_MOVIE, DELETE_MOVIE, CHANGE_STATUS } from "../actions/actionTypes";
const initialState = {
  movies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(a => a !== action.payload)
      };
    case CHANGE_STATUS:
      return {
        ...state,
        movies: state.movies
          .filter(a => a !== action.payload)
          .concat({
            title: action.payload.title,
            status: !action.payload.status
          })
      };
    default:
      return state;
  }
};
