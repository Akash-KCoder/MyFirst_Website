import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
const Login = () => {
    return (
        <div>
            <div class="wrapper">
        {/* <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""></img>
        </div> */}
        <div class="text-center mt-4 name">
            Company name
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"></input>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"></input>
            </div>
            <div class="btn mt-3">
                <NavLink to='/Loginpage' ><h5 style={{color:'white'}}>Login</h5></NavLink>
            </div>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> 
            {/* or <a href="#">Sign up</a> */}
        </div>
    </div>
        </div>
    )
}

export default Login
