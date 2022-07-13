import './App.css';
import {Routes, Route, Links} from 'react-router-dom';
import HomePage from './Pages/HomePage';     
import Profile from './Pages/Profile'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import CreatePostPage from './Pages/CreatePostPage';
import NavBar from './Components/NavBar'
import PostPage from './Pages/PostPage';
import {useState} from 'react';

function App() {

  const [selectedPost, setSelectedPost] = useState({})
  
  const onClickPost = (postObj) => {
    setSelectedPost(postObj)
  }
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleLogged = (isLoggedIn) => {
  isLoggedIn === false ? setIsLoggedIn(true) : setIsLoggedIn(false)
  return isLoggedIn
  }

  return (
    <div className="App">
          <NavBar  handleLogged={handleLogged} isLoggedIn={isLoggedIn}/>
          <Routes>
          <Route exact path="/login" element={<LoginPage isLoggedIn={isLoggedIn} handleLogged={handleLogged}/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/new_post" element={<CreatePostPage />}/>
          <Route path="/post" element={<PostPage {...selectedPost}/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUpPage  isLoggedIn={isLoggedIn} handleLogged={handleLogged}/>}/>
        </Routes>
    </div>
  );
}

export default App;