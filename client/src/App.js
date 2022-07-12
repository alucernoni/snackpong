import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';


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
