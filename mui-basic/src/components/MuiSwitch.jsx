/* eslint-disable react/prop-types */
import {Box,FormControlLabel,Switch} from '@mui/material'

const MuiSwitch = ({handleChange,checked}) => {
    
  return (
    <Box>
        <FormControlLabel label={checked?'Dark mode':'Day mode'} control={<Switch checked={checked} onChange={handleChange} />} />
    </Box>
  )
}

export default MuiSwitch