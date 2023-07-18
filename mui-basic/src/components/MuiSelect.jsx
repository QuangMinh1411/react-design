import {useState} from 'react'
import { Box,TextField,MenuItem } from '@mui/material'
const MuiSelect = () => {
    const [countries,setCountries] = useState([])
    const handleChange = (e)=>{
      const value = e.target.value
        setCountries(typeof value==='string'?value.split(','):value)
    }
    console.log(countries)
  return (
    <Box width='250px'>
        <TextField label='Select country' 
            select value={countries} 
            onChange={handleChange}
            color='primary'
            size='small'
            helperText="Select countries"
            fullWidth
            SelectProps={{
              multiple:true
            }}
            >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>

    </Box>
  )
}

export default MuiSelect