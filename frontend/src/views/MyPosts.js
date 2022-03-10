import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Post from '../components/Post'
import '../styles/Posts.css'

const MyPosts = () =>{
    
  const [posts, setPosts] = useState()
  const { user } = useContext(AuthContext)
  const { user_id } = user

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/my-posts/${user_id}`)
      .then(res => {
        const posts = res.data
        setPosts(posts)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='Posts'>
      {posts?.map((post, index) =>
          <Post className='Post' key={index} post={post} edit={true} />)
      }
    </div>
  )
}

export default MyPosts
