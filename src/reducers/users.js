import * as types from '../constants';
const defaultState = {
  loading: false,
  error: '',
  users: [],

};

export default function (state = defaultState, action) {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case types.GET_USERS_FAILURE:
      return {
        loading: false,
        error: action.error,
      }
    default:
      return state;

  }
}