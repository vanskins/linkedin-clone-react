import React from "react";

import { LoginAPI } from "../api/AuthApi";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const login = () => {
    const result = LoginAPI();
    console.log(result);
  };
  return (
    <div>
      <h1>LoginComponent</h1>
      <button onClick={login} className="login-btn">
        Login in to LinkedIn
      </button>
    </div>
  );
}
