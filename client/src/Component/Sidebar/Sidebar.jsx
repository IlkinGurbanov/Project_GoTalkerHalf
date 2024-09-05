import React from 'react'
import "./Sidebar.css"
import {AiFillHome , AiTwotoneSetting} from 'react-icons/ai'
import {MdPermContactCalendar , MdDarkMode , MdOutlineLightMode} from 'react-icons/md'
import {BsChatFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

function Sidebar() {
  return (
    <div className="sidebar">
        <p className='boxheader'>
            <BsChatFill title='GOtalker' className='boxicon logo'/>
        </p>
        <p className="boxcenter">
            <AiFillHome title='Home' className='boxicon'/>
            <MdPermContactCalendar title='Contact' className='boxicon'/>
            <AiTwotoneSetting title='Settings' className='boxicon'/>
        </p>
        <p className="boxend">
            <MdDarkMode title='Darkmode' className="boxendicon" style={{color:"black"}}/>
            <MdOutlineLightMode title='Lightmode' className='boxendicon'/>
            <div className="boxendframe">
              <FaUserAlt title='User' className='boxendicon'/>
            </div>
        </p>
    </div>
  )
}

export default Sidebar