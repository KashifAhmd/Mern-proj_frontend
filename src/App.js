import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from "./Hooks/useAuthContext";

import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";

function App() {
   const {user}= useAuthContext();

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
