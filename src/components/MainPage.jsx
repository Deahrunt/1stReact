import React from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class MainPage extends React.Component {
  render() {
    return (
      <div >
        <Jumbotron className='jb' >
          {/*<Image src={require('../images/react.png')}/>*/}
          <h1>Привет всем!</h1>
          <p>
            Освоение React!
          </p>
          <p>
            <Link to='/news'>
               тык и в новости.
            </Link>
          </p>
        </Jumbotron>
      </div>
    )
  }
}