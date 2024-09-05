import React from 'react'
import './Panel.css'
import {AiOutlineSearch} from 'react-icons/ai'

function Panel() {
  return (
    <div className="panel">
        <div className="searchbox">
            <div className="search">
                <AiOutlineSearch className='searchicon'/>
                <input placeholder='Search' type="text" className="searchinput" />
            </div>
        </div>
        <div className="msg">
            <p className="msgtext">Messages</p>
            <hr />
        </div>
        <div className="messages">
            
        </div>
    </div>
  )
}

export default Panel