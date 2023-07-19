import { useState } from 'react'
import {Box, FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from '@mui/material'
const MuiRadioButton = () => {
    const [value,setValue] = useState('');
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    console.log(value)
  return (
    <Box>
        <FormControl>
            <FormLabel  id='job-experience-group-label'>Years of experience</FormLabel>
            <RadioGroup name='job-experience-group' 
                        aria-labelledby='job-experience-group-label'
                        onChange={handleChange} row>
                <FormControlLabel control={<Radio size='medium' color='secondary' />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton