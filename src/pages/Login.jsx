import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate('/');
    });
  };
  
  return (
    <div className="LoginPage">
      <p>Sign in with Google account</p>
      <button className="login-with-google-btn" onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
