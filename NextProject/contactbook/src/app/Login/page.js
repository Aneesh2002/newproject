import React from 'react'
import '../Login/login.css'

const Login = () => {
  return (
    <>
    <div>
    <div>
        <img src="/images/logo-transparent-png.png" alt="Logo" className="logo"/>
    </div>
    <div className="text-center">
        <h1> Welcome to Link Book!<br/>
        "Your personal contact hub, just a click away."</h1>
    </div>
   
    <div className="inputdiv mt-5">
        <label className="fw-bolder fs-3">Login</label>
        <div className='d-flex'>
            <div>
            <input className="form-control" type="email" placeholder="Email" aria-label="Email" required />
            </div>
            <div className='ms-5'>
            <a href="/Index"><button type="submit" value="submit" className=" btn text-white rounded-pill">Next</button></a>
            </div>
            
            
        </div>
        <p style={{color: '#cf3ef3;'}} className="mt-2">Don't have an account?<a href="Signup.html">Sign in</a></p>
        
    </div>
    </div>

    </>
  )
}

export default Login