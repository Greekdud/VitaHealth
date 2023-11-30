import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
// import Chat from './components/Chat';
// import ChatFe from './components/ChatFe';
// import Rough from './components/Rough';
import Chatbox from './components/ChatBox';



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
             {/* <Route path="/chat" element= {<Chat />} /> */}
             {/* <Route path="/rough" element= {<Rough />} /> */}
              {/* <Route path="/chatFe" element= {<ChatFe />} /> */}
               <Route path="/chatBox" element= {<Chatbox />} />
        </Routes>
    </BrowserRouter>
  )

export default App