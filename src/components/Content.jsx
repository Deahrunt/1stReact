import React from 'react';
import News from './News';
import MainPage from './MainPage';
import { Route, Switch } from 'react-router-dom';
import Users from './Users';
import UserInformation from './UserInformation';


export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: null
    };
  }


  render() {
    return (
      <div className='content'>
        <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/news' component={News} />
            <Route path='/users' component={Users}/>
            <Route path='/user_information' component={UserInformation}/>
        </Switch>
      </div>
    );
  }
}
