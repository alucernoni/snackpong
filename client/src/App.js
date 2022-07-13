import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewPostForm from './Pages/NewPostForm';
import PostPage from './Pages/PostPage';
import {useState} from 'react'


function App() {

  const [selectedPost, setSelectedPost] = useState({})
  
  const onClickPost = (postObj) => {
    setSelectedPost(postObj)
  }


  return (
    <div className="App">
      
        {/* <HomePage /> */}
        <Routes>
          <Route exact path="/" element={<HomePage setSelectedPost={setSelectedPost} onClickPost={onClickPost}/>}/>
          <Route path="/profile"/>
          <Route path="/new_post" element={<NewPostForm />}/>
          <Route path="/post" element={<PostPage {...selectedPost}/>}/>
          <Route path="/login"/>
          <Route path="/signup"/>
        </Routes>

    
      
    </div>
  );
}

export default App;