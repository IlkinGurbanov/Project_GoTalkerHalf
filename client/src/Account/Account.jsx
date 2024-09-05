import React from 'react'
import './Account.css'
import { BsChatFill } from 'react-icons/bs'
// import Login from './Login/Login'
import Registerr from './Register/Registerr'
// import Verify from './Verify/Verify'

function Account() {
  return (
    <div className="account">
        <p className='boxheader'>
            <BsChatFill title='GOtalker' className='boxicon logo'/>
            <p className="logotext">GoTalker</p>
        </p>
        <div className="mainbox">
            {/* <Login/> */}
            <Registerr/>
            {/* <Verify/> */}
        </div>
    </div>
  )
}

export default Account