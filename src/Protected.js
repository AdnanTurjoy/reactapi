import { useEffect } from 'react';
import React from 'react';
import {useHistory} from 'react-router-dom';
function Login(props) {
    const history = useHistory();
    let cmp= props.cmp
    useEffect(() =>{
        if(!localStorage.getItem('user-info')){
            history.push('/register');
        }
    })
    
    return ( <div>
        <cmp/>
    </div> );
}

export default Login;