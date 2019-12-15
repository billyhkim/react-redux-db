import { FETCH_TODOS, NEW_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = {
  todos: [],
};

// action must include type
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      console.log('todoReducer');
      return {
        // ...state is the current state
        ...state,
        todos: action.payload
      };
    case NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      };
    case TOGGLE_TODO:
      return {
        todos: [...state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              todo: todo.todo,
              completed: !todo.completed,
              description: todo.description,
              id: todo.id,
            }
          } else {
            return todo;
          }
        })]
      };
    default:
      return state;
  }
};
