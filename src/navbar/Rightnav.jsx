import React from 'react'
import logo1 from './supercell_creators_grey.f699541d.png'
import logo2 from './supercell_make_grey.964b2d8d.png'
import logo3 from './supercell_id_grey.62affa0b.png'
const rightnav = () => {
  return (
    <div id='rightnav'>
      <a href="#">Store</a>
      <a href="#"><img src={logo1} alt="" className='img1' /></a>
      <a href="#"><img src={logo2} alt="" className='img2'/></a>
      <a href="#"><img src={logo3} alt="" className='img3'/></a>
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
    </div>
  )
}

export default rightnav