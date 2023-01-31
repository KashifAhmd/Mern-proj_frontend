import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';
import {useLogout} from '../../Hooks/useLogout';
 

import './NavbarStyle.css'

function Navbar() {
  const { user} = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () =>{
    logout();
  }

  return (
    <nav>
        <Link to="/">
        <h1>WorkoutBuddy</h1>
        </Link>
{user && (
  <div className='logout'>
    <span >{user.email}</span>
  <button onClick={handleClick}>Logout</button>
</div>
)}
        {!user && (
          <div className="auth">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
       </div>
        )}
    </nav>
  )
}

export default Navbar