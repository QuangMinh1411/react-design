import {useState} from 'react'
import { Box,FormControlLabel,Checkbox } from '@mui/material'
const MuiCheckBox = () => {
    const [acceptTnc,setAcceptTnc] = useState(false)
    const handleChange = (e)=>{
        setAcceptTnc(e.target.value)
    }
    console.log(acceptTnc)
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' 
            control={<Checkbox checked={acceptTnc} onChange={handleChange} />}/>

        </Box>
    </Box>
  )
}

export default MuiCheckBox