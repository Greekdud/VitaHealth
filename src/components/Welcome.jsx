import React from 'react'
import blacklogo from '../Assets/vitaguideblack.png'
import vitahealthlogo from '../Assets/vitahealthlogo.png'
import activity from '../Assets/Activity.svg'
import './Welcome.css';
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome-main-container'>
          <aside className='welcome-left'>
              <div className='welcome-img-container-left'>
                 <Link  to='/login'>
                    <img className='nav-logo' src={blacklogo} alt="" />
                  </Link>
              </div>
          </aside>
              

        <div className='welcome-right'>

                <div className='img-small-container'>
                   <div className='welcome-img-container-right'>
                    <Link  to='/login'>
                     <img className='welcome-img-right' src={vitahealthlogo} alt="" />
                     </Link>
                   </div>
                    <h3>Welcome to a Healthier You</h3>
                </div>

                <div className='welcome-cards'>
                  <Card />
                  <Card />
                  <Card />
                </div>
                {/* <div className='welcome-right-bottom'></div> */}
          </div>
    </div>
  
  )
}

export default Welcome

function Card () {
  return (
    <div className='welcome-card'>

                      <img src={activity} alt="" />
                      <h4>Headline Here</h4>
                        <p className='welcome-card-p'>Hello! Welcome to VitaHealth! We got you covered? Have any health complaint?Message Kosi now- Our Highly trained Bot!
                          <br />
                          <Link  to='/chatbox'>
                     CLICK HERE
                     </Link> </p>
                  </div>
  )
}