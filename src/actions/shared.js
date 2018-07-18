import API from 'goals-todos-api';
import { RECEIVE_DATA } from './types';

function recieveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(recieveDataAction(todos, goals));
      }
    );
  };
}
