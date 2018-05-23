import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';

export default function getBookFailure(state = initialState.error, action) {
    switch (action.type) {
      case 'GET_BOOKS_FAILURE':
        return action.error;
      case 'LOAD_BOOKS_SUCCESS1':
        return action.error;
  
      default:
        return state;
    }
  }