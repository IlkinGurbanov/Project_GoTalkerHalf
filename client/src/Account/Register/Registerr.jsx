import React from 'react'
import './Registerr.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

function Registerr() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="Register">
        <p className="Registertext">Register</p>
        <div className="inputsize">
            <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            />
            <FormControl  sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel  htmlFor="outlined-adornment-password">Create password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <button className="registerbtn">Register</button>
        </div>
    </div>
  )
}

export default Registerr
