import React from 'react'
import './Regis.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Footer } from '../footer/footer'
import { NavBar } from '../header/nav'



export const  Regis= () => {
    const navigate=useNavigate()
    const [values, setValues] = React.useState({
    
        name: '',
        dob:'',
        phone: '',
        pincode:'',
        password: '',
        confirmpassword: '',
    
      })
    
    const handleChangename = (event) => {
      setValues({...values,name: event.target.value})
    }
    const handleChangedob = (event) => {
      setValues({...values,dob: event.target.value})
    }
    const handleChangephone = (event) => {
      setValues({...values,phone: event.target.value})
    }
    const handleChangepincode = (event) => {
      setValues({...values,pincode: event.target.value})
    }
    const handleChangecreatepassword= (event) => {
      setValues({...values,createpassword: event.target.value})
    }
    const handleChangeconfirmpassword= (event) => {
        setValues({...values,confirmpassword: event.target.value})
      }

      const Signup=(event)=>{
          alert(`welcome! Register successfully`)
          navigate('/regis/signin')
      }

    
  
    return(<div> 
        <NavBar/>
         <form  className='Home'>
       <div className='Home1'>
            <br />
            <h2>REGISTRATION FORM<hr /></h2><br />
        
        
            <input  type="text"placeholder='Name'value={values.name} onChange={handleChangename}/><br />
            <input type="text"placeholder='Date of birth'value={values.dob} onChange={handleChangedob}/> <br />
            <input type="text"placeholder='Phone'value={values.phone} onChange={handleChangephone}/><br />
            <input type="text"placeholder='Pincode'value={values.pincode} onChange={handleChangepincode}/><br />
            <input type="password"placeholder='Create password'value={values.createpassword} onChange={handleChangecreatepassword}/><br />
            <input type="password" placeholder='Confirm Password'value={values.confirmpassword} onChange={handleChangeconfirmpassword}></input><br /><br /><br />
            <NavLink to='/regis/signin'><button onClick={Signup}>Sign up</button></NavLink><br />
        

            <p className='as'>Already have an account </p>
            <NavLink to='/regis/signin'><button  onClick={()=>navigate('/regis/signin')}> Sign in</button></NavLink>
            
        </div>
        </form>
        <Footer/>
        </div>

    
    

   
   )

  }