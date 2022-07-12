import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewPostForm from './Pages/NewPostForm';
import Profile from './Pages/Profile'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'


function App() {
  return (
    <div className="App">
          <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/new_post" element={<NewPostForm />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
    </div>
  );
}

export default App;