import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo-white-purple.png"

function Header() {
  return (
    <div className="w-full bg-dark"> 
        <nav className="flex justify-between w-full px-16 py-2">
            <div className="flex items-center justify-center logo-header h-100">
                <img src={logo} className="w-20 h-20" alt="get-a-de-laid logo" />
            </div>
            <ul className="flex flex-row p-6">
                <li className="mx-4">
                    <Link to="/signup">Sign up</Link>
                </li>
                <li className="mx-4">
                    <Link to="/login">Login</Link>
                </li>
                <li className="mx-4">
                    <Link to="/landing">Landing Page</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
