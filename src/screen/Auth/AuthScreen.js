import {useParams, Route, Routes, useLocation } from "react-router-dom"
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import logo from "../../assets/images/logo-white-purple.png"


function AuthScreen() {
    let url = useLocation().pathname;
    let auth;
    // determine if user sign up or login
    if (url == "/signup") auth = <SignUp />;
    else auth = <Login />; 
    return(
        <div className="w-full flex flex-row justify-center my-5 mt-0 mx-10">
            <div className="flex basis-3/4 h-screen justify-center bg-slate-100 t-10 w-full">
                {auth}
            </div>
            <div className="flex basis-1/4 h-screen bg-primary items-center pt-20 flex-col">
                <img src={logo} className="w-36 h-36" alt="get-a-de-laid logo" />
                <div className="p-5 text-white text-center">
                    Find your soulmate in Adelaide and Choose the getaway provided by our partner
                </div>
            </div>  
        </div>
    )
    
};

export default AuthScreen;