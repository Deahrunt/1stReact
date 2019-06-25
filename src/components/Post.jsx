import React from 'react';
import { Panel } from 'react-bootstrap';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0,
    };
    this.likeCounter = this.likeCounter.bind(this)
    this.dislikeCounter = this.dislikeCounter.bind(this)

  };

  likeCounter() {
    this.setState({like: ++this.state.like})
  };
  dislikeCounter() {
    this.setState({dislike: ++this.state.dislike})
  };



  render() {
    const { like } = this.state;
    const { dislike } =this.state;
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.props.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.props.body}</Panel.Body>
          <button onClick={this.likeCounter}><img className='img' src={require('../images/like.png')}/> like: {like} </button>
          <button onClick={this.dislikeCounter}><img className='img' src={require('../images/dis.png')}/> dislike: {dislike}</button>
        </Panel>
      </div>
    )
  }
}