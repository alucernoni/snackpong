import './App.css';
import {Routes, Route, Links} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import CreatePostPage from './Pages/CreatePostPage';


function App() {
  return (
    <div className="App">
          <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/new_post" element={<CreatePostPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
    </div>
  );
}

export default App;