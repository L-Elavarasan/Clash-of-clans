import React from 'react'
import cocimage from './hero_bg_clashofclans.jpg'
import cocimage1 from './main_logo_clashofclans.jpg'
const Bgsection = () => {
  return (
    <div className='cocimg'>
        <img src={cocimage} alt="" className='img1' />
        <img src={cocimage1} alt="" className='img2'/>
    </div>
  )
}

export default Bgsection