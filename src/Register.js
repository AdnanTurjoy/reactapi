import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    // let item = { name, password, email };

    // let result = await fetch("http://127.0.0.1:8000/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    const formData = new FormData();
    formData.append("name",name);
    formData.append("password",password);
    formData.append("email",email);
    let result = await axios.post("http://localhost:8000/api/register",formData);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User sign up</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />

      <br />
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default Register;
