import React from 'react'
import Leftnews from './Leftnews'
import Rightnews from './Rightnews'

const Newsview = () => {
  return (
    <div className='newspart'>
        <article>
        <div className='head'>
            <h1>NEWS</h1>
        </div>
        <div className='newimg'>
            <Leftnews/>
            <Rightnews/>
        </div>
        <div className='newsbutton'>
            <button> <a href="#">CLASS OF CLAN NEWS</a></button>
        </div>
        </article>
    </div>
  )
}

export default Newsview