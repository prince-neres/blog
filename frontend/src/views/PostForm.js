import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
import '../styles/PostForm.css'

const PostForm = ({ match, history }) => {
  const postId = match.params.id
  const { user } = useContext(AuthContext)

  const [post, setPost] = useState({
    title: '',
    content: '',
    image: null,
  })

  useEffect(() => {
    getPost()
  }, [])

  let getPost = () => {
    if (postId === undefined) return
    axios.get(`http://localhost:8000/posts/${postId}`)
      .then(res => {
        const post = res.data
        setPost(post)
        console.log(post)
      })
  }

  let handleChange = (e) =>
    setPost({
      ...post,
      [e.target.id]: e.target.value
    })

  let handleImageChange = (e) =>
    setPost({
      ...post,
      image: e.target.files[0]
    })
  
  function validate_image(img) {
    var pattern = /^http:\/\//i

    if (pattern.test(img)) {
      return true
    }
    else {
      return false
    }
  }

  let createPost = async () => {
    let formData = new FormData()
    post.image ? formData.append('image', post.image, post.image.name) : console.log('não tem')
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('user', user.user_id)
    let url = 'http://localhost:8000/posts/'
    axios.post(url, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    history.push('/posts')
  }

  let updatePost = async () => {
    let formData = new FormData()
    post.image ? 
    validate_image(post.image) ? console.log('tem') : formData.append('image', post.image, post.image.name)
    : console.log('não tem')
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('user', user.user_id)
    let url = `http://localhost:8000/posts/${postId}/`
    axios.put(url, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    history.push('/posts')
  }

  let deletePost = async () => {
    postId ? axios.delete(`http://localhost:8000/posts/${postId}`, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(history.push('/posts')) 
    : history.push('/posts')
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    postId ? updatePost() : createPost()
  }

  return (
    <div className='PostForm'>
      <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Titúlo:</label>
          <input type='text' placeholder='Title' id='title' value={post.title} onChange={handleChange} required />
          <label htmlFor='content'>Conteúdo:</label>
          <input type='text' placeholder='Content' id='content' value={post.content} onChange={handleChange} />
          <label htmlFor='image'>Imagem:</label>
        <img src={`http://localhost:8000${post.image}`} />
          <input type='file'  id='image' accept='image/png, image/jpeg' onChange={handleImageChange} />
          <p>
            <button onClick={deletePost}>Delete</button>
            <input className='Submit' type='submit' />
          </p>
      </form>
    </div>
  )
}

export default PostForm
