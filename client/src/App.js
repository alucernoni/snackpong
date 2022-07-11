import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <HomePage />
        <Routes>
          <Route exact path="/"/>
          <Route path="/profile"/>
          <Route path="/new_post"/>
          <Route path="/login"/>
          <Route path="/signup"/>
        </Routes>

    
      
    </div>
  );
}

export default App;
