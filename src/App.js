import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Chat from './components/Chat';
import ChatFe from './components/ChatFe';


const App = () => (
    // <div>
    //     <Login />
    //     <Register />
    // </div>
    <BrowserRouter>
        {/* <Navbar /> */}
      
        <Routes>
            <Route path="/" element= {<SignUp />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/welcome" element= {<Welcome />} />
             <Route path="/chat" element= {<Chat />} />
              {/* <Route path="/chatFe" element= {<ChatFe />} /> */}
        </Routes>
    </BrowserRouter>
  )

export default App