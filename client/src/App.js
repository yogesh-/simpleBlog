// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';

function App() {
  return <>
 <Navbar/>
  
  
  <Routes>
    <Route exact path="/" element={<MainPage/>} />
    <Route path="/create-post" element={<CreatePost/>} />
    </Routes>
  </>
    
}

export default App;
