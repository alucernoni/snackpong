import './App.css';
import {Routes, Route, Links} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreatePostPage from './Pages/CreatePostPage';


function App() {
  return (
    <div className="App">

        {/* <HomePage /> */}
        <Routes>
          <Route exact path="/"/>

          <Route path="/profile"/>
          <Route path="home" element={<HomePage />}/>
           
          <Route path="newpost" element={<CreatePostPage />}/>

          <Route path="/login"/>
          <Route path="/signup"/>
        </Routes>

    
      
    </div>
  );
}

export default App;