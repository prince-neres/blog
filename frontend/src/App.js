import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './views/HomePage'
import Login from './views/LoginPage'
import Register from './views/RegisterPage'
import PostForm from './views/PostForm'
import MyPosts from './views/MyPosts'
import './styles/index.css'

function App() {
  return (
    <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route component={Login} path='/login' />
            <Route component={MyPosts} path='/my-posts' />
            <Route component={Register} path='/register' />
            <Route component={PostForm} path='/post/:id'/>
            <Route component={PostForm} path='/new-post' />
            <Route component={Home} path='/' />
          </Switch>
          <Footer />
        </AuthProvider>
    </Router>
  )
}

export default App
