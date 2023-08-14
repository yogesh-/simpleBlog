// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';

function App() {
  return <>
 <Navbar/>
  
  
  <Routes>
    <Route exact path="/" element={<MainPage/>} />
    <Route path="/create-post" element={<CreatePost/>} />
    <Route path="/post/:id" element={<Post/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
  </>
    
}

export default App;
