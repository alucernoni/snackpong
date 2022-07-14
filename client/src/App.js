import './App.css';
import {Routes, Route, Links} from 'react-router-dom';
import HomePage from './Pages/HomePage';     
import Profile from './Pages/Profile'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import CreatePostPage from './Pages/CreatePostPage';
import NavBar from './Components/NavBar'
import PostPage from './Pages/PostPage';
import {useState, useEffect} from 'react';

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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/snacks_posts/")
      .then((resp) => resp.json())
      .then((postsArray) => {
        console.log(postsArray)
        setPosts(postsArray)
      });
  }, []);

  function handleAddPost(newPost) {
    const updatedPostsArray = [...posts, newPost];
    console.log(newPost)
    setPosts(updatedPostsArray);
  }

  function handleDeletePost(id) {
    const updatedPostsArray = posts.filter((post) => post.id !== id);
    setPosts(updatedPostsArray);
  }

  function onUpdatePost(updatedPost) {
    const updatedPostsArray = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPostsArray);
  }


  return (
    <div className="App">
      <NavBar handleLogged={handleLogged} isLoggedIn={isLoggedIn}
        handleAddPost={handleAddPost}
      />
    <Routes>
      <Route path="/" element={<HomePage onClickPost={onClickPost}
        posts={posts}
        onDeletePost={handleDeletePost}
        onUpdatePost={onUpdatePost}
      />} />

      
        <Route exact path="/login" element={<LoginPage isLoggedIn={isLoggedIn} handleLogged={handleLogged} />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/new_post" element={<CreatePostPage />} />
        <Route path="/post" element={<PostPage {...selectedPost} />} />



        <Route path="/signup" element={<SignUpPage isLoggedIn={isLoggedIn} handleLogged={handleLogged} />} />
      </Routes>
    </div>
  );
}

export default App;