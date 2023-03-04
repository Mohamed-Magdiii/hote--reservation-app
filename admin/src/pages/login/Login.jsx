import React, { useState } from 'react';
import "./login.scss"
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login= ()=>{
    const [credentials, setCredentials] = useState({
        email:undefined,
        password:undefined
    })
    const {user,loading,  error , dispatch} = useContext(AuthContext)

    const handleChange = (e)=>{
        setCredentials((prev) => ({...prev, [e.target.id]:e.target.value }))
    }
    const navigate= useNavigate();
    const handleSubmit=async (e)=>{
      e.preventDefault()
      dispatch({type:"LOGIN_START"})
      try {
        const res = await axios.post('/auth/login', credentials)
        console.log(res.data)
        if(res.data.result.roleId.key === "admin"){
          dispatch({type:"LOGIN_SUCCESS" ,payload:res.data.result.details})
          navigate("/")
        }else{
          dispatch({
            type:"LOGIN_FAILURE",
            payload:{messages : "You are not allowed !"}
          })
        }
      } catch (error) {
        dispatch({
          type:"LOGIN_FAILURE",
          payload:error.response.data
        })
      }
    }
    return (
        <div className='login'>
          <div className='container'>
            <input type="email"  id='email' className='linput' onClick={(e)=>handleChange(e)} />
            <input type="password"  id='password' className='linput' onClick={(e)=>handleChange(e)} />
            <button disabled={loading} onClick={(e)=>handleSubmit(e)} className="lButton">Login</button>
            {error&& <span className='lerror'>{error.message}</span>}
          </div> 
        </div>
    );
}


export default Login;