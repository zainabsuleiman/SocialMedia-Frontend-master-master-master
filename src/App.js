import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter,HashRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/Signup/SignupForm";
 import HomePage from './components/HomePages/HomePage';
import LoginForm from './components/Signup/Login/LoginForm';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route    path="/" element={<Home   />}  />
        <Route path="/SignUp"  element={<SignupForm/>} />
        <Route path="/LogIn"    element={<LoginForm/> }   />
        <Route    path="/Home" element={<Home/> }  />
      </Routes>
          </ Router>
        <div className="blur" style={{top: '-190%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-30rem'}}></div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}

export default App;
