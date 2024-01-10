import React from 'react'
import appstore from './appstore.jpg'
import googleplay from './googleplay.jpg'
import amazon from './amazon.jpg'

const Rightpart = () => {
  return (
    <div className='rightsection'>
      <article>
      <div className='content'>
          <h1>LEAD YOUR CLAN TO VICTORY!</h1>
          <p>Answer the call of the mustache! Join the international fray that is Clash of Clans. Customize your village, build an army and crush your opponents.
             Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians. Download for free and Clash on, Chief!</p>
        </div>
        <div className='appstore'>
            <ul>
            <li><a href="#"><img src={appstore} alt="" className='store' /></a></li>
            <li><a href="#"><img src={googleplay} alt="" className='play'/></a></li>
            <li><a href="#"><img src={amazon} alt="" className='amazo'/></a></li>
            </ul>
        </div>
      </article>
        
    </div>
  )
}

export default Rightpart