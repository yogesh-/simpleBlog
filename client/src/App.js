// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import AuthNavbar from "./components/AuthNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import UserFeed from "./pages/UserFeed";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  let currentNavbar = <Navbar />;
  if (isLoginPage || isSignupPage) {
    currentNavbar = <AuthNavbar />;
  }

  return (
    <>
      {!isHomePage && currentNavbar}

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          exact
          path="/home"
          element={<ProtectedRoute element={<UserFeed />} />}
          // element={<UserFeed />}
        />
        <Route
          path="/create-post"
          element={<ProtectedRoute element={<CreatePost />} />}
        />
        <Route
          path="/post/:id"
          element={<ProtectedRoute element={<Post />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
