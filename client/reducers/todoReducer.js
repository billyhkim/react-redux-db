import { FETCH_TODOS, NEW_TODO } from '../actions/types';

const initialState = {
  // from FETCH_TODOS
  todos: [],
  // to store the single todo
  todo: {}
}

// action must include type
export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}