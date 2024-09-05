import React from 'react'
import './Verify.css'
import TextField from '@mui/material/TextField';

function Verify() {

  return (
    <div className="Verify">
        <p className="Verifytext">Verify code</p>
        <div className="inputsize">
            <TextField
            id="outlined-multiline-flexible"
            label="Enter  verification code"
            multiline
            maxRows={4}
            />
            <p className="resend">resend verification code</p>
            <button className="logbtn">verify</button>
        </div>
    </div>
  )
}

export default Verify