import axios from 'axios';
import { FETCH_TODOS, NEW_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

export const fetchTodos = () => dispatch => {
  console.log('fetchTodos');
  axios.get('/api/todos')
    // .then(res => console.log(res.data))
    .then(res => dispatch({
      type: FETCH_TODOS,
      payload: res.data
    }));
}

export const newTodo = (todoData) => dispatch => {
  console.log('newTodo');
  const postConfig = {
    method: 'POST',
    url: '/api/todos',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(todoData),
  };
  axios(postConfig)
    .then(res => dispatch({
      type: NEW_TODO,
      payload: res.data
    }));
}

export const deleteTodo = (todoId) => dispatch => {
  console.log('deleteTodo');
  const deleteConfig = {
    method: 'DELETE',
    url: `/api/todos/${todoId}`,
  };
  axios(deleteConfig)
    .then(res => dispatch({
      type: DELETE_TODO,
      payload: todoId
    }));
}

export const toggleTodo = (todoId, completedStatus) => dispatch => {
  console.log('toggleTodo');
  const toggleConfig = {
    method: 'PATCH',
    url: `/api/todos/${todoId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      completed: !completedStatus
    })
  };
  axios(toggleConfig)
    .then(res => dispatch({
      type: TOGGLE_TODO,
      payload: todoId
    }));
}
