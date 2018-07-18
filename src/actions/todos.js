import API from 'goals-todos-api';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function handleAddTodo(name, callback) {
  return dispatch => {
    if (name) {
      return API.saveTodo(name)
        .then(todo => {
          dispatch(addTodo(todo));
          callback();
        })
        .catch(() => {
          alert('An error occured, Try again!');
        });
    }
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert('An error occured, try again!');
    });
  };
}

export function handleToggle(id) {
  return dispatch => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert('An error occured, Try again!');
    });
  };
}
