import axios from 'axios';
import {GET_USERS_REQUEST, GET_USERS_FAILURE, GET_USERS_SUCCESS} from "../constants/index";


export function setUsers() {
  return function (dispatch) {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // ответ получен, пользователи загружены
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: response.data,
        })
      })
      .catch(err => {
        // ответ получен, произошла ошибка
        dispatch({
          type: GET_USERS_FAILURE,
          error: true,
          payload: err,
        })
      })

  }
}






//   type: types.GET_USERS_SUCCESS,
//   users: [
//     {name: 'user1'},
//     {name: 'user2'},
//   ]
// };