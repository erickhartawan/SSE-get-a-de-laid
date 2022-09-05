import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Header() {
    return ( 
    <nav>
        <ul className='flex flex-row p-6'>
          <li className='mx-4'>
            <Link to="/signup">Sign up</Link>
          </li>
          <li className='mx-4'>
            <Link to="/login">Login</Link>
          </li>
          <li className='mx-4'>
            <Link to="/landing">Landing Page</Link>
          </li>
        </ul>
      </nav>
);
}

export default Header;