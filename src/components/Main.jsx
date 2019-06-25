import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {bindActionCreators} from "redux";
import {setUsers} from "../actions/users";
import {connect} from 'react-redux';

export class Main extends React.Component {
  renderUsers(users) {
    return users.map((item, i) => (
      <User user={item} key={i} />
    ))
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Content
        />
        {this.renderUsers(this.props.users.users)}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUsers }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
