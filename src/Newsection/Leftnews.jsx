import React from 'react'
import article1 from './Article_thumbnail1.jpg'
const Leftnews = () => {
  return (
    <div className='leftnew'>
        <div className='articleimg'>
            <img src={article1} alt="" />
        </div>
        <div>
        <p>CLASS OF CLANS</p>
        <a href="#">It Takes a Village to Build Clash of Clans!</a>
        </div>
    </div>
  )
}

export default Leftnews