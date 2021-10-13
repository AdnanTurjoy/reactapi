import { useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

   async function login(){
    let item = { email, password};

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");   
    
   }
  return (
    <div>
      <h1>Login</h1>
      <div className="col-sm-4 col-sm-offset-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />{" "}
        <br />
        <input
          type="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />{" "}
        <button type="submit" onClick={login} className="btn btn-primary">login</button>
        <br />
      </div>
    </div>
  );
}

export default Login;
