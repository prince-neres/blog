import { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/Register.css'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const { registerUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    registerUser(username, password, password2)
  }

  return (
    <div className='RegisterForm'>
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <hr />
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          onChange={e => setUsername(e.target.value)}
          placeholder='Username'
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <label htmlFor='confirm-password'>Confirm Password</label>
        <input
          type='password'
          id='confirm-password'
          onChange={e => setPassword2(e.target.value)}
          placeholder='Confirm Password'
          required
        />
        <p>{password2 !== password ? 'Passwords do not match' : ''}</p>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
