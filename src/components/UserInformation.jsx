import React from 'react';
import UserInfo from './UserInfo';

export default class UserInformation extends React.Component {




  renderUsersInfo() {
    return this.props.users.map((item, index) => (
        <UserInfo
          key={index}
          username={item.username}
          name={item.name}
          email={item.email}
          phone={item.phone}
        />
      )
    )
  }


  render() {
    let view = this.renderUsersInfo(this.props.users);
    console.log(this.props.users);
    return (
      <div>
       <span>
         <h1>BLABLA</h1>
       </span>
        {view}
      </div>
    );

  }
}