import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div className='Post'>
      {props.edit ?
        <Link to={`/post/${props.post.id}`}>
          <strong>{props.post.title}</strong>
          <img src={`http://localhost:8000${props.post.image}`}></img>
          <p>Criado em: {props.post.date.slice(0, 10)}</p>
          <p>{props.post.content}</p>
          <a>{props.post.user}</a>
        </Link> : 
        <div>
          <strong>{props.post.title}</strong>
          <img src={`http://localhost:8000${props.post.image}`}></img>
          <p>Criado em: {props.post.content.slice(0, 10)}</p>
          <p>{props.post.content}</p>
          <a>{props.post.user}</a>
        </div>
      }
    </div>
  )
}

export default Post
