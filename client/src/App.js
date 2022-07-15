import './App.css';
import {Routes, Route, Links} from 'react-router-dom';
import HomePage from './Pages/HomePage';     
import Profile from './Pages/Profile'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import NavBar from './Components/NavBar'
import PostPage from './Pages/PostPage';
import {useState, useEffect} from 'react';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])



  const [selectedPost, setSelectedPost] = useState({})
  
  const onClickPost = (postObj) => {
    setSelectedPost(postObj)
  }
  
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

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

  if (!user) return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<LoginPage onLogin={setUser} />} />
        <Route path="/signup" element={<SignUpPage onSignUp={setUser} />} />
      </Routes>
    </>)

  return (
    <div className="App">
      <NavBar 
        handleAddPost={handleAddPost} user={user} setUser={setUser}
      />
    <Routes>      
        <Route exact path="/" element={<LoginPage onLogin={setUser}  />} />
         <Route path="/homepage" element={<HomePage onClickPost={onClickPost}
        posts={posts}
        onDeletePost={handleDeletePost}
        onUpdatePost={onUpdatePost}/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route path="/post" element={<PostPage {...selectedPost} />} />
        <Route path="/signup" element={<SignUpPage  onSignUp={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;