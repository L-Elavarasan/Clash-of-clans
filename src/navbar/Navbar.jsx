import React from 'react'
import Leftnav from './Leftnavs'
import Middlenav from './Middlenav.jsx'
import Rightnav from './Rightnav.jsx'

const Navbar = () => {
  return (
    <div className='nav'>
        <article>
            <Leftnav/>
            <Middlenav/>
            <Rightnav/>
        </article>
    </div>
  )
}

export default Navbar