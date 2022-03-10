import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import '../styles/Posts.css'

const Home = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/posts/')
      .then(res => {
        const posts = res.data
        setPosts(posts)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='Posts'>
      {posts
        ?.map((post, index) =>
          <Post className='Post' key={index} post={post} edit={false} />)
      }
    </div>
  )
}

export default Home
