import React, { useState } from "react";
import "./LoginStyle.css";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login, error} = useLogin()

  const handleSubmit = async(e) =>{
    e.preventDefault();

    await login(email,password);
    setEmail("");
    setPassword("");
    // console.log(email, password);
  }
  return (
    <div className="main-form">
      <h1>LogIn Here</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} id="" />
        </div>
        <div className="field">
          <label htmlFor="">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} id="" />
        </div>

        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
