import React from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'

const Gamestore = () => {
  return (
    <div className='gamesection'> 
       <article>
        <Leftpart/>
        <Rightpart/>
       </article>
    </div>
  )
}

export default Gamestore