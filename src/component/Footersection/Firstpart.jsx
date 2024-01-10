import React from 'react'
import appstore from './appstore.jpg'
import googlepay from './googleplay.jpg'
import Lastpart from './Lastpart'
const Firstpart = () => {
  return (
    <div className='topfoot'>
        <aside className='firstfooter'>
        <h5>Follow us on</h5>
            <div>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
              <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </aside>
        <aside className='leftstore'>
          <img src={appstore} alt="" className='img1'/>
          <img src={googlepay} alt="" className='img2' />
        </aside>
    </div>
  )
}

export default Firstpart