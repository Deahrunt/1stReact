import { combineReducers } from "redux";
import usersReducer from './users';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';


export const history = createBrowserHistory();

export default combineReducers({
  router: connectRouter(history),
  users: usersReducer,
})