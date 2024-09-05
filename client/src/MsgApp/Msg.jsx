import React from 'react'
import './MsgApp.css'
import Sidebar from "../Component/Sidebar/Sidebar";
import Panel from "../Component/Panel/Panel";
import Frame from "../Component/Frame/Frame";


function Msg() {
  return (
    <div className='msgapp'>
        <Sidebar/>
        <Panel/>
        <Frame/>
    </div>
  )
}

export default Msg