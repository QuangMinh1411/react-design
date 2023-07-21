/* eslint-disable react/prop-types */
import {Box,FormControlLabel,Switch} from '@mui/material'
import { useState,useEffect } from 'react'
const MuiSwitch = () => {
  const [dark,setDark] = useState(false);
    
  const changeBackground = (e)=>{
        setDark(e.target.checked)
    }
    useEffect(()=>{
      Boom(dark);
    },[dark])
  
    console.log(dark)
  const Boom = (value)=>{
    if(value){
      document.body.style.backgroundColor='black'
      document.body.style.color = 'white'
    }
    else{
      document.body.style.backgroundColor='white'
      document.body.style.color = 'black'
    }
  }
  return (
    <Box>
        <FormControlLabel label={dark?'Dark mode':'Day mode'} control={<Switch checked={dark} onChange={changeBackground} />} />
    </Box>
  )
}

export default MuiSwitch