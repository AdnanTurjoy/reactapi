import { useEffect } from 'react';
import React from 'react';
import {useHistory} from 'react-router-dom';
function Login() {
    const history = useHistory();
    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            history.push('./add')
        }
    },[])
    return ( <div>
        <h1>Login</h1>
    </div> );
}

export default Login;