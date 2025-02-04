import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { useState } from "react";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleIsLoginForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
            <img 
            src={BG_URL}
            alt="BG Image"
            />
            </div>
            <form className="absolute text-white w-1/2 bg-black p-12 my-36 mx-auto right-0 left-0 flex flex-col space-y-4 sm:opacity-90">
            <h1 className="font-bold text-3xl pl-2">{isLogin ? "Sign In" : "Sign Up"}</h1>
            {!isLogin && (
                <input type="text" placeholder="UserName" className="p-4 m-2 bg-gray-800" />
            )}
                <input type="text" placeholder="Email Address" className="p-4 m-2 bg-gray-800" />
                <input type="password" placeholder="Password" className="p-4 m-2 bg-gray-800" />
                <button className="p-4 m-2 font-bold rounded-lg bg-red-700 -space-y-4 cursor-pointer">Sign In</button>
                <span className="flex flex-wrap">
                <p className="p-2 m-2">New to Netflix?</p>
                <p className="p-2 m-2 -ml-4 font-bold cursor-pointer hover:underline" onClick={toggleIsLoginForm}>{isLogin ? "Sign Up Now" : "Already registered sign in now"}</p>
                </span>
            </form>
        </div>
    );
};

export default Login;