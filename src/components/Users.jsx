import React from 'react';
import axios from 'axios';
import User from './User';
import UserInformation from "./UserInformation";

export default class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      error: '',
    };
  }


  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    this.setState({
      loading: true,
      error: ''
    });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          users: response.data,
          loading: false

        })
      })
      .catch(error => {
        this.setState({
          error: 'ошибка',
          loading: false
        });
      })
  }


  renderUsers(users) {
    return users.map((item, index) => (
        <User
          key = {index}
          username = {item.username}
          name = {item.name}
        />
      )
    )
  }


  render() {
    let view;
    if (this.state.loading) {
      view = <p>Загрузка пользователей</p>
    } else if (this.state.error) {
      view = <h1>{this.state.error}</h1>
    } else {
      view = this.renderUsers(this.state.users)

    }
    return (
      <div>
       <span>
         <h1>Пользователи</h1>
       </span>
        {view}
        <UserInformation users={this.state.users} />
      </div>
    );

  }
}