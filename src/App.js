import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import GetValues from './components/MovieDetails';
import Remove from './components/MovieDel';
import HomePage from './components/Homepage';
import PostValues from './components/MoviePost';
import UpdateValues from './components/UpdateMovie';
function App() {
  return (
      <div>
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/MovieDetails" element={<GetValues/>}/>
            <Route path="/MoviePost" element={<PostValues/>}/>
            <Route path="/UpdateMovie" element={<UpdateValues/>}/>
            <Route path="/MovieDel" element={<Remove/>}/>
      </Routes>
      </div>
  );
}

export default App;