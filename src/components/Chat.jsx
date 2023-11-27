import React, { useState } from 'react'
import blacklogo from '../Assets/vitaguideblack.png'
import vitahealthlogo from '../Assets/vitahealthlogo.png'
// import logo from '../Assets/logo.png'
// import activity from '../Assets/Activity.svg'
import './Chat.css';
import { Link } from 'react-router-dom'
import Eclipse from '../Assets/Ellipse.svg'
import { baseUrl } from './baseUrl';


const Chat = () => {
const [input, setInput] = useState("");
const [message, setMessage] = useState("");

 const handleSend = (e) => {
    e.preventDefault();
    
    const url = baseUrl + 'api/chat/session/{id}/interact/';

       fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${localStorage.getItem('access')}`
        },
        body: JSON.stringify({
                input:input,
                message:message,
            }),
      })
       .then((response)=> {
                return response.json(); 
              })
              .then( (data) => {
               localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
              
              })
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
                            {/* <div className='user-message'>this is a message</div> */}
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

export default Chat