import React, { useState } from 'react';
import { baseUrl } from './baseUrl'
import './Login.css';
import wellness from '../Assets/wellness.png';
import googleLogo from '../Assets/google logo.svg'
import faceBook from '../Assets/Vector.svg'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';





const Login = () => {

const [formData, setFormData] = useState({
  email:"",
  password:"",
})

const navigate = useNavigate()

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData (prevFormData => ({...prevFormData, [name] : value
  }))
}

  const handleLogin = (e) => {
    e.preventDefault();
     navigate('/welcome');
  

    const url = baseUrl + 'api/auth/login';

       fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
                email:formData.email,
              password:formData.password,
            }),
      })
       .then((response)=> {
                return response.json(); 
              })
              .then( (data) => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
              console.log(data)
              })
  }


  return (
    <>
    <Navbar/>
    <div className='main-container container'>
      <div className='account-container'>
        <h3>Welcome Back!</h3>

        <form className='form'  onSubmit={handleLogin} >

          <div className='input-field'>
             <label className='label' htmlFor="email">Email</label>
             <input className='input' 
                  type="email" 
                  placeholder='Enter Email' 
                  name='email'
                    value={formData.email}
                  onChange={handleInputChange}
               />
          </div>

          <div className='input-field'>
             <label className='label' htmlFor="password">Password</label>
             <input className='input'
              type="password" 
              placeholder='Enter Password'  
              name='password'
              value={formData.password}
              onChange={handleInputChange}/>
          </div>

         <button className='btn btn-register' type='submit' >Sign In</button>
           <p className='paragraph sign-in'> Don't have an Account? <Link className='link' to="/"><span className='span'>Sign Up</span></Link></p>

         <button className='btn btn-google'><img src={googleLogo} alt="" type="submit"
            onClick={handleLogin} /> Sign In with Google</button>
         <button className='btn btn-fb'><img src={faceBook} alt="" /> Sign In with Facebook</button>

        </form>
      </div>
      <div className='separator'></div>
      <div className='img-container'>
          <div className='img-div'>
            <img className='LR-img' src={wellness} alt="" />
          </div>
          <div className='word-div'>
             <h4>Navigating Wellness Together: Your Trusted Health Companion</h4>
             <p className='paragraph'>A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject.</p>
          </div>
      </div>
    </div>
    </>
  )
}



export default Login

