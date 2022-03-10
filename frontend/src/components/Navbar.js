import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import '../styles/NavBar.css'

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
        <div className='NavBar'>
          {user ? (
            <div className="Sections">
              <Link to="/">Home</Link>
              <Link to="/my-posts">My Posts</Link>
              <Link to="/new-post">New Post</Link>
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div className="Login">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
    </nav>
  )
}

export default Navbar
