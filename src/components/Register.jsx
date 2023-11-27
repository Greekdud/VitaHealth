// import React, {useState} from 'react';
// import './Register.css';
// import wellness from '../Assets/wellness.png';
// import googleLogo from '../Assets/google logo.svg';
// import faceBook from '../Assets/Vector.svg';
// import { Link, useNavigate  } from 'react-router-dom';
// import Navbar from './Navbar';
// import { baseUrl } from './baseUrl';



  



// const Register = () => {

// const [registerData,setRegisterData] = useState({
//   full_name:"",
//   email:"",
//   password:"",
// })

// const navigate = useNavigate() 

// const handleInputRegister = (e) => {
//   const { name, value } = e.target;
//   setRegisterData (prevRegisterData => ({...prevRegisterData, [name] : value
//   }))
// }

//   const handleRegister = (e) => {
//     e.preventDefault();
   
//     const url = baseUrl + 'api/users/create';

//           fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//                  full_name:registerData.full_name,
//                 email:registerData.email,
//               password:registerData.password,
//             })
//       })
//        .then((response)=> {
//                 return response.json(); 
//               })
//               .then( (data) => {
//                 // localStorage.setItem('token', data);
//               console.log(data)
//               })
//   }
            
              

// return (
//       <>
//        <Navbar/>
//           <div className='main-container container'>
//             <div className='account-container'>
//               <h3>Create an Account</h3>
              
//               <form className='form' onSubmit={handleRegister}>
//                 <div className='input-field'>
//                   <label className='label' htmlFor="text">Name</label>
//                   <input className='input' 
//                   type="text" 
//                   name="name"
//                   value={registerData.full_name}
//                   placeholder='Enter Full Name'
//                   onChange={handleInputRegister}/>
//                 </div>

//                 <div className='input-field'>
//                   <label className='label' htmlFor="email">Email</label>
//                   <input className='input' 
//                   type="email" placeholder='Enter Email'
//                   name="email"
//                   value={registerData.email}
//                   onChange={handleInputRegister}/>
//                 </div>

//                 <div className='input-field'>
//                   <label className='label' htmlFor="password">Password</label>
//                   <input className='input' 
//                   type="password" placeholder='Enter Password'
//                   name="password"
//                   value={registerData.password}
//                   onChange={handleInputRegister}/>
//                 </div>
//               <button className='btn btn-register'>Register</button>
//                 <p className='paragraph sign-in'> Already have an Account? <Link className='link' to="/login"><span className='span'>Sign In</span></Link></p>
              
//               <button className='btn btn-google'><img src={googleLogo} alt="" /> Sign Up with Google</button>
//               <button className='btn btn-fb'><img src={faceBook} alt="" /> Sign Up with Facebook</button>

//               </form>
//             </div>
//             <div className='separator'></div>
//             <div className='img-container'>
//                 <div className='img-div'>
//                   <img className='LR-img' src={wellness} alt="" />
//                 </div>
//                 <div className='word-div'>
//                   <h4>Navigating Wellness Together: Your Trusted Health Companion</h4>
//                   <p className='paragraph'>A detailed wireframe kit made of comprehensive components to get you started on you next website or landing pageproject.</p>
//                 </div>
//             </div>
//           </div>
//      </>
//   )
// }


// export default Register;






