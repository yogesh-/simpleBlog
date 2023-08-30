// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/HomePage";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/home" element={<UserFeed />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
