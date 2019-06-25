import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class News extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     news: [],
     loading: false,
     error: '',
    };
  }
  componentDidMount() {
    this.getNews()
  }

  getNews() {
    this.setState({
      loading: true,
      error: ''
    });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          news: response.data,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          error: 'ошибка',
          loading: false
        });
        console.log(error);
      })
  }

  renderNews(news) {
    return news.map((item, index) => (
      <Post
        key = {index}
        title = {item.title}
        body = {item.body}
      />
      )
    )
  }

 render() {
   let view;
   if (this.state.loading) {
     view = <p>Загрузка новостей</p>
   } else if (this.state.error) {
     view = <h1>{this.state.error}</h1>
   } else {
     view = this.renderNews(this.state.news)
   }
   return (
     <div>
       <span>
         <h1>Новости</h1>
       </span>
       {view}
     </div>
   );

 }
}