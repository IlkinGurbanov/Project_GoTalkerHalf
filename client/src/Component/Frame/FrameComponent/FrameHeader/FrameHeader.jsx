import React from 'react'
import './FrameHeader.css'
import { FaUserAlt } from 'react-icons/fa'
import {MdCall} from 'react-icons/md'
import {GoDeviceCameraVideo} from 'react-icons/go'

function FrameHeader() {
  return (
    <div className="FrameHeader">
        <div className="headerstart">
            <div className="userframe">
              <FaUserAlt title='User' className='usericon'/>
            </div>
            <div className="userinfo">
                <p className="username">John Doe</p>
                <p className="usernumber">+9940771234567</p>
            </div>
        </div>
        <div className="headerend">
            <GoDeviceCameraVideo className='video'/>
            <MdCall className='sound'/>
        </div>
    </div>
  )
}

export default FrameHeader