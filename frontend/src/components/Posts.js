import axios from 'axios'
import React from 'react'

export default class Posts extends React.Component {

  state = {
    posts: null
  }

  componentDidMount() {
    axios.get('http://localhost:8000/posts/')
      .then(res => {
        const posts = res.data
        this.setState({ posts })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <div className='Post'>
          {this.state.posts
            ?.map(post =>
              <div className='Post' key={post.id}>
              {post.title}
              <img src={post.image}></img>
              <p> { post.content }</p>
              { post.user }
            </div >)
          }
        </div>
      )
  }
}