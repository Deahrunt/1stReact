import React from 'react';
import { Panel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import UserInfo from './UserInfo';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  };



  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.username}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.props.name}</Panel.Body>
          <button><Link to='/user_information'>
            перейти к пользователю
          </Link></button>
        </Panel>
      </div>
    )
  }
}