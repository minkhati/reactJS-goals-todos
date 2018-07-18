import API from 'goals-todos-api';

import { ADD_GOAL, REMOVE_GOAL } from './types';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function handleAddGoal(name, callback) {
  return dispatch => {
    if (name) {
      return API.saveGoal(name)
        .then(goal => {
          dispatch(addGoal(goal));
          callback();
        })
        .catch(() => {
          alert('An error occured, Try again!');
        });
    }
  };
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert('An error occured, try again!');
    });
  };
}
