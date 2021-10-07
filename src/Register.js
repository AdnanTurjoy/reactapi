import React,{useState, useEffect} from 'react';
const url = "http://127.0.0.1:8000/api/register";
const Register = () => {
    const [name,setName] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');


  async function handleSubmit(){
    
     let data ={name,password,email}
     const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const result = await fetch(url, config)
     
    //  let item ={name,password,email}
    // let result = await fetch("http://127.0.0.1:8000/api/register",{
    //      method: 'POST',
    //      headers: {
    //          "Content-Type" : "application/json",
    //          "Accept" : "application/json",
             
    //      },
    //      body: JSON.stringify(item)

    //  });
    //  result = await result.json();
    //  console.log("result",result);
    }


    return ( 
    <div className="col-sm-6 offset-sm-3">
        <h1>User sign up</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
        <br/>
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
      <br/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control"/>

     <br/>
     <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign Up</button>
          
    </div>  );
}
 
export default Register;