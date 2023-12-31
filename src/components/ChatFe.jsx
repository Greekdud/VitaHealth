import React, { useState } from 'react'
import blacklogo from '../Assets/vitaguideblack.png'
import vitahealthlogo from '../Assets/vitahealthlogo.png'
// import logo from '../Assets/logo.png'
// import activity from '../Assets/Activity.svg'
import './Chat.css';
import { Link } from 'react-router-dom'
import Eclipse from '../Assets/Ellipse.svg'
import { baseUrl } from './baseUrl';
import axios from 'axios';

const API_KEY = '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'
const API_URL = 'https://api.openai.com/v1/engines/davinci/completions'
const headers = {
    Authorization: API_KEY
}

const ChatFe = () => {
const [input, setInput] = useState("");
const [message, setMessage] = useState("");

 const handleSend = (e) => {
    e.preventDefault();

    axios 
    .post(API_URL, {input}, {headers})
    .then((res) => {
        setMessage(res.data.message);
    })
    .catch((err) => {
        console.error(err);
    });





//     const url = baseUrl + 'api/chat/session/{id}/interact/';

//        fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Token ${API_KEY}`,
//         },
//         body: JSON.stringify({
//                 model:"gpt-3..5-turbo",
//                 message:[{role:"user", content: setMessage}],
//             }),
//       })
//        .then((response)=> {
//                 return response.json(); 
//               })
//               .then( (data) => {
//                 // localStorage.setItem('token', data);
//               console.log(data)
//               })
  }


  return (
     <div className='welcome-main-container'>
          <aside className='welcome-left'>
              <div className='welcome-img-container-left'>
                <Link  to='/login'>
                    <img className='nav-logo' src={blacklogo} alt="" />
                  </Link>
              </div>
          </aside>
              

         <div className='chat-right'>

                        <div className='chat-user-input'> 
                          <div><textarea className='chat-input' name="message" id="" cols="110" rows="10"  value={message} onChange={(e) => setMessage(e.target.value)} >{message}</textarea></div>
                           
                                <div><img src={Eclipse} alt="" /></div>
                        </div>
                        <div className='chat-admin-input'> 
                          <div><img src={Eclipse} alt="" /></div>
                          <div><textarea className='chat-input' name="" id="" cols="100" rows="10"></textarea></div>
                          
                      </div>
                      
                <div >
                  <input className='chat-input type' type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)}/>
                  {/* <textarea className='chat-input type' name="" id="" cols="120" rows="4"></textarea> */}
                  <button onClick={handleSend}>Send</button>
                </div>
                
          </div>
    </div>
  
  )
}

export default ChatFe