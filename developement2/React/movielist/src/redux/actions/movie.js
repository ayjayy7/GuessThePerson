import { ADD_MOVIE, DELETE_MOVIE, CHANGE_STATUS } from "./actionTypes";
export const add_movie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};
export const delete_movie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};
export const change_status = movie => {
  return {
    type: CHANGE_STATUS,
    payload: movie
  };
};
