import React from 'react'
import './Regis.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { NavBar } from '../header/nav'
import { Footer } from '../footer/footer'



export const  SignIn= (props) => {
    const navigate=useNavigate()
    const Signin=()=>{
        alert("Sign in Successfully")
        navigate('/')
    }
  return(
      <div>
          <NavBar/>
    <form className='Home'>
        <div className='Home1'>
            <br /><h2>LOGIN FORM<hr /></h2><br />

            <input type="text" placeholder='Phone' required></input><br /><br />
            <input type="password" placeholder='Password' required></input><br /><br /><br />
            <NavLink to='/'>
            <button onClick={Signin}>Login</button><br /><br />
            <NavLink to='/regis'><button>Register here</button></NavLink><br />
            
            </NavLink>
            
        </div>
    </form>
    <Footer/>
    </div>
   )
  }