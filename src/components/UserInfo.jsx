import React from 'react';
import { Panel } from 'react-bootstrap';
import {Link} from "react-router-dom";

export default class UserInfo extends React.Component {
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
          <ul>
            <li>
              {this.props.email}
            </li>
            <li>
              {this.props.phone}
            </li>
          </ul>
          <button><Link to='/Users'>
            Закрыть
          </Link></button>
        </Panel>
      </div>
    )
  }
}