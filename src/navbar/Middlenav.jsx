import React from 'react'

const middlenav = () => {
  return (
    <div id='middlenav'>
        <ul>
            <li><a href="#">Games</a>
            <div id='dropdown'>
              <ul>
                <li><a href="#">Hay Day</a></li>
                <li><a href="#">Clash of Clans</a></li>
                <li><a href="#">Boom Beach</a></li>
                <li><a href="#">Clash Royale</a></li>
                <li><a href="#">Brawl Stars</a></li>
              </ul>
            </div>
            </li>
            <li><a href="#">Careers</a>
            <div id='dropdown'>
              <ul>
                <li><a href="#"> Why You Might Love It Here</a></li>
                <li><a href="#">Our Offices</a></li>
                <li><a href="#">Joining Supercell</a></li>
                <li><a href="#">Living in Helsinki</a></li>
                <li><a href="#">Living in Shanghai</a></li>
                <li><a href="#">Open Positions</a></li>
                <li><a href="#">Career Stories</a></li>
              </ul>
            </div>
            </li>
            <li><a href="#">Support</a>
            <div id='dropdown'>
              <ul>
                <li><a href="#"> Be Safe & Play Fair</a></li>
              </ul>
            </div>
            </li>
            <li><a href="#">About Us</a>
            <div id='dropdown'>
              <ul>
                <li><a href="#"> News</a></li>
                <li><a href="#">Investments</a></li>
                <li><a href="#">Level Up</a></li>
                <li><a href="#">Ilkka's Long Texts</a></li>
              </ul>
            </div>
            </li>
        </ul>
    </div>
  )
}

export default middlenav