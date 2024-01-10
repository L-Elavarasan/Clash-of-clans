import React from 'react'
import Navbar from './navbar/Navbar'
import Bgsection from './component/Bgsection'
import Gamestore from './gamesstores/Gamestore'
import Newsview from './Newsection/Newsview'
import Lastest from './Lastestpart/Lastest'
import Positionintrest from './Positionpart/Positionintrest'
import Footerpart from './Footersection/Footerpart'
import Cocvideo from './Cocvideo/Cocvideo'

const App_main = () => {
  return (
    <div>
        <Navbar/>
        <Bgsection/>
        <Gamestore/>
        <Newsview/>
        <Lastest/>
        <Cocvideo/>
        <Positionintrest/>
        <Footerpart/>
    </div>
  )
}

export default App_main