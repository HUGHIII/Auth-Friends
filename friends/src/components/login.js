import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';




const Login = props => {
    const [creds,setCreds] =useState({username:'',password:''});

    const handleChange = e => {
        setCreds({...creds,[e.target.name]: e.target.value});
    }

   const log = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login',creds)
        .then(res=> {
            console.log(res)
            return window.localStorage.setItem('TOKEN', res.data.payload),
            //  <Redirect to='/FriendsList'/>
        })
        .catch(err=>console.log(err,'errrrooooorrrrrr'))
    }

    return (
        <form onSubmit={log} className='login-cont'>
            <label htmlFor='username'>
                <input
                type='text'
                name='username'
                placeholder='username'
                value={creds.username}
                onChange={handleChange}
                />
                </label>
                <label htmlFor='password'>
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={creds.password}
                    onChange={handleChange}
                    />
                </label>

                <button type='submit'>Login</button>
            
        </form>
    )
}

export default Login;